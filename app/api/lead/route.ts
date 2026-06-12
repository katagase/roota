import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Lead = { company?: string; name?: string; email?: string };

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const ATTACH_MAX = 3 * 1024 * 1024; // 3MB 以下なら添付、それ以上はリンク

function esc(s = "") {
  return s.replace(/[<>&"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" }[c]!));
}

async function getAccessToken() {
  const tenant = process.env.MS_TENANT_ID!;
  const params = new URLSearchParams({
    client_id: process.env.MS_CLIENT_ID!,
    client_secret: process.env.MS_CLIENT_SECRET!,
    scope: "https://graph.microsoft.com/.default",
    grant_type: "client_credentials",
  });
  const res = await fetch(`https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`token request failed: ${res.status} ${await res.text()}`);
  const json = (await res.json()) as { access_token?: string };
  if (!json.access_token) throw new Error("no access_token in token response");
  return json.access_token;
}

async function sendMail(token: string, from: string, message: Record<string, unknown>) {
  const res = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(from)}/sendMail`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ message, saveToSentItems: true }),
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error(`sendMail failed: ${res.status} ${await res.text()}`);
}

// 資料PDFを URL 経由で取得して添付化（Vercel のサーバーレス関数でも確実に動く）。
async function loadBrochureAttachment(pdfUrl: string) {
  try {
    const res = await fetch(pdfUrl, { cache: "no-store" });
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length === 0 || buf.length > ATTACH_MAX) return null;
    return {
      "@odata.type": "#microsoft.graph.fileAttachment",
      name: "ROOTA_サービス資料.pdf",
      contentType: "application/pdf",
      contentBytes: buf.toString("base64"),
    };
  } catch {
    return null;
  }
}

export async function POST(req: Request) {
  let body: Lead;
  try {
    body = (await req.json()) as Lead;
  } catch {
    return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });
  }

  const company = (body.company ?? "").trim();
  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();

  if (!company || !name || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid input" }, { status: 422 });
  }

  const from = process.env.MAIL_FROM_ADDRESS;
  const fromName = process.env.MAIL_FROM_NAME || "ROOTA";
  const to = process.env.MAIL_TO_ADDRESS;
  if (
    !process.env.MS_TENANT_ID ||
    !process.env.MS_CLIENT_ID ||
    !process.env.MS_CLIENT_SECRET ||
    !from ||
    !to
  ) {
    console.error("[lead] mail environment variables are not configured");
    return NextResponse.json({ ok: false, error: "server not configured" }, { status: 500 });
  }

  // 申込者へ案内するダウンロードURL
  const proto = req.headers.get("x-forwarded-proto") ?? "https";
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  const origin = host ? `${proto}://${host}` : new URL(req.url).origin;
  const pdfUrl = `${origin}/roota-document.pdf`;
  const fromField = { emailAddress: { address: from, name: fromName } };

  // (1) 営業窓口への通知メール
  const notifyHtml = `
    <div style="font-family:sans-serif">
      <h2 style="margin:0 0 12px">ROOTA 資料ダウンロード申込</h2>
      <table style="border-collapse:collapse">
        <tr><td style="padding:4px 16px 4px 0;color:#666">会社名</td><td style="padding:4px 0"><b>${esc(company)}</b></td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#666">お名前</td><td style="padding:4px 0"><b>${esc(name)}</b></td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#666">メール</td><td style="padding:4px 0"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
      </table>
      <p style="color:#999;font-size:12px;margin-top:16px">ROOTA ランディングページの資料ダウンロードフォームから送信されました。</p>
    </div>`;
  const notifyMessage = {
    from: fromField,
    subject: `【ROOTA】資料ダウンロード: ${company} / ${name}`,
    body: { contentType: "HTML", content: notifyHtml },
    toRecipients: [{ emailAddress: { address: to } }],
    replyTo: [{ emailAddress: { address: email, name } }],
  };

  // (2) 申込者へのサンクス（自動返信）メール
  const attachment = await loadBrochureAttachment(pdfUrl);
  const docLine = attachment
    ? "本メールにサービス資料（PDF）を添付しております。"
    : `下記より資料をダウンロードいただけます。<br><a href="${pdfUrl}">${pdfUrl}</a>`;
  const thanksHtml = `
    <div style="font-family:sans-serif;line-height:1.9;color:#0f1f3d">
      <p>${esc(name)} 様</p>
      <p>このたびは <b>ROOTA</b> のサービス資料をご請求いただき、誠にありがとうございます。</p>
      <p>${docLine}</p>
      <p>ご不明点やご相談がございましたら、本メールにそのままご返信ください。担当者よりご連絡いたします。</p>
      <p style="margin-top:24px">— ROOTA（組織の知識に、根を張るAI。）<br>
      運営：ケーティージーエス合同会社（KTGS）</p>
      <p style="color:#999;font-size:12px;margin-top:16px">本メールは送信専用アドレスから自動送信されています。ご返信は担当者が確認いたします。</p>
    </div>`;
  const thanksMessage: Record<string, unknown> = {
    from: fromField,
    subject: "【ROOTA】資料のご請求ありがとうございます",
    body: { contentType: "HTML", content: thanksHtml },
    toRecipients: [{ emailAddress: { address: email, name } }],
    replyTo: [{ emailAddress: { address: to } }],
    ...(attachment ? { attachments: [attachment] } : {}),
  };

  try {
    const token = await getAccessToken();

    // 通知メールは必須（リード取りこぼし防止のため失敗時はエラー返却）
    await sendMail(token, from, notifyMessage);

    // サンクスメールはベストエフォート（失敗してもリクエストは成功扱い）
    try {
      await sendMail(token, from, thanksMessage);
    } catch (e) {
      console.error("[lead] thank-you mail failed:", e);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead]", err);
    return NextResponse.json({ ok: false, error: "send failed" }, { status: 502 });
  }
}
