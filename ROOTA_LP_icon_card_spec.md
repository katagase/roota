# ROOTA LP デザイン修正仕様書（アイコン / カード）

対象: Vercel公開中の ROOTA ランディングページ
目的: アイコンの「さみしさ」「バラつき」を解消し、ブランドの統一感を出す。
原則: **色 = 意味の対応**。使用色をブランド3色（白 / グリーン / ネイビー）に絞り、オレンジは「開発予定」バッジ専用にする。

---

## 0. 修正方針（3行）

1. アイコンを「薄いティント地の48pxタイル」に乗せる（白カードへの直置きをやめる）。
2. accent色を **課題=ネイビー / 機能・解決=グリーン** に統一。1セクション内で色を混在させない。
3. オレンジ・グレーをアイコンに使わない。オレンジは「開発予定」バッジのみ。

---

## 1. デザイントークン

緑が現状セクションごとに微妙に違う可能性があるので、**緑は1つに固定**してください。

### CSS custom properties

```css
:root {
  /* brand */
  --roota-green:        #2E9E6B; /* ブランド緑（CTA・見出し・accentバー） */
  --roota-green-strong: #1F7A50; /* ティント地に乗せるアイコングリフ用 */
  --roota-green-tint:   #E8F4EE; /* アイコンタイルの背景（緑系） */
  --roota-navy:         #16223D; /* 見出し・本文タイトル・課題のaccent */
  --roota-navy-tint:    #EAEDF4; /* アイコンタイルの背景（ネイビー系） */

  /* text / surface */
  --roota-title:        #16223D;
  --roota-body:         #5B6577;
  --roota-border:       #E3E8EF;
  --roota-page:         #F4F7FA;

  /* warning（開発予定バッジ専用。これ以外に使わない） */
  --roota-warning:      #F4A23B;
  --roota-warning-text: #5A3508;
}
```

### Tailwind（`tailwind.config.{js,ts}`）

```js
theme: {
  extend: {
    colors: {
      roota: {
        green:       '#2E9E6B',
        'green-strong': '#1F7A50',
        'green-tint': '#E8F4EE',
        navy:        '#16223D',
        'navy-tint': '#EAEDF4',
        body:        '#5B6577',
        border:      '#E3E8EF',
        page:        '#F4F7FA',
        warning:     '#F4A23B',
        'warning-text': '#5A3508',
      },
    },
  },
}
```

---

## 2. カード共通コンポーネント

全セクションのカードはこの1つのパターンに統一します。違いは `variant`（problem / feature）だけ。

### 構造

```
.roota-card
 ├─ .roota-card__bar    ← 上端4pxのaccentバー
 └─ .roota-card__body
     ├─ .roota-tile     ← 48px ティント地タイル + アイコン24px
     ├─ .roota-card__title
     ├─ .roota-card__desc
     └─ .roota-badge     ← 任意（開発予定のときだけ）
```

### プレーンCSS

```css
.roota-card {
  background: #fff;
  border: 0.5px solid var(--roota-border);
  border-radius: 12px;
  overflow: hidden; /* ← accentバーの角をカードの丸みに合わせるため必須 */
}
.roota-card__bar  { height: 4px; }
.roota-card__body { padding: 18px 16px; position: relative; }

.roota-tile {
  width: 48px; height: 48px;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 14px;
}
.roota-tile svg { width: 24px; height: 24px; } /* lucide等のSVGアイコン */

.roota-card__title { font-size: 15px; font-weight: 600; color: var(--roota-title); margin-bottom: 6px; }
.roota-card__desc  { font-size: 13px; line-height: 1.6; color: var(--roota-body); }

/* variant: 課題（problem）= ネイビー */
.roota-card--problem .roota-card__bar { background: var(--roota-navy); }
.roota-card--problem .roota-tile { background: var(--roota-navy-tint); color: var(--roota-navy); }

/* variant: 機能・解決（feature）= グリーン */
.roota-card--feature .roota-card__bar { background: var(--roota-green); }
.roota-card--feature .roota-tile { background: var(--roota-green-tint); color: var(--roota-green-strong); }

/* 開発予定バッジ（任意） */
.roota-badge {
  position: absolute; top: 14px; right: 14px;
  background: var(--roota-warning); color: var(--roota-warning-text);
  font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 6px;
}
```

### HTML（CSS版の使い方）

```html
<article class="roota-card roota-card--feature">
  <div class="roota-card__bar"></div>
  <div class="roota-card__body">
    <div class="roota-tile"><!-- <Search/> など --></div>
    <h3 class="roota-card__title">ナレッジ検索（出典つき）</h3>
    <p class="roota-card__desc">規程・マニュアル・FAQを、聞くだけで出典つきで回答。</p>
  </div>
</article>
```

### React + Tailwind コンポーネント（Next.js向け）

`lucide-react` を使う前提。アイコンセットはプロジェクトの既存ものに合わせて差し替え可。

```tsx
import { type LucideIcon } from 'lucide-react';

type Variant = 'problem' | 'feature';

const styles: Record<Variant, { bar: string; tile: string; glyph: string }> = {
  problem: { bar: 'bg-roota-navy',  tile: 'bg-roota-navy-tint',  glyph: 'text-roota-navy' },
  feature: { bar: 'bg-roota-green', tile: 'bg-roota-green-tint', glyph: 'text-roota-green-strong' },
};

export function RootaCard({
  variant = 'feature',
  icon: Icon,
  title,
  desc,
  badge,
}: {
  variant?: Variant;
  icon: LucideIcon;
  title: string;
  desc: string;
  badge?: string; // 例: '開発予定'
}) {
  const s = styles[variant];
  return (
    <article className="overflow-hidden rounded-xl border-[0.5px] border-roota-border bg-white">
      <div className={`h-1 ${s.bar}`} />
      <div className="relative p-4">
        {badge && (
          <span className="absolute right-3.5 top-3.5 rounded-md bg-roota-warning px-2 py-0.5 text-[11px] font-semibold text-roota-warning-text">
            {badge}
          </span>
        )}
        <div className={`mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl ${s.tile}`}>
          <Icon className={`h-6 w-6 ${s.glyph}`} strokeWidth={1.75} />
        </div>
        <h3 className="mb-1.5 text-[15px] font-semibold text-roota-navy">{title}</h3>
        <p className="text-[13px] leading-relaxed text-roota-body">{desc}</p>
      </div>
    </article>
  );
}
```

```tsx
// 使用例
<RootaCard variant="feature" icon={Search}    title="ナレッジ検索（出典つき）" desc="規程・マニュアル・FAQを、聞くだけで出典つきで回答。" />
<RootaCard variant="feature" icon={Mic}        title="議事録自動作成" desc="会議音声から、要点・決定事項を自動で議事録化。" badge="開発予定" />
<RootaCard variant="problem" icon={FileSearch} title="「あの決まり、どこ?」" desc="出張申請のたび、社内資料を漁って探している" />
```

---

## 3. accent色の割り当てルール（最重要）

| 用途 | accentバー / アイコン | タイル背景 | グリフ色 |
|---|---|---|---|
| 課題（problem） | `--roota-navy` | `--roota-navy-tint` | `--roota-navy` |
| 機能・解決（feature） | `--roota-green` | `--roota-green-tint` | `--roota-green-strong` |
| 開発予定バッジ | `--roota-warning` | — | `--roota-warning-text` |
| 主CTAボタン | `--roota-green`（塗り） | — | `#fff` |
| 副CTAボタン | `--roota-green`（線） | 透明 | `--roota-green` |

> オレンジ・グレー・水色などはアイコンに使わない。色を足したくなったら「緑のティント濃淡」で表現する。

---

## 4. セクション別 適用表

| セクション | 現状の問題 | 適用variant | 具体的な直し |
|---|---|---|---|
| よくある課題（4枚） | 青/橙/グレー混在。グレーが死んで見える | problem（navy） | 4枚ともネイビー。**グレータイルを廃止** |
| WHAT ROOTA CAN DO（探す/作る/守る） | 比較的良好 | feature（green） | アイコンを緑ティントへ。POINTサークルは維持してOK |
| ACCURACY（3枚） | ネイビー/緑/青 混在 | feature（green） | 3枚とも緑に統一 |
| 機能一覧（12枚） | 6色使用で散漫 | feature（green） | 全枚緑。**開発予定の3項目（議事録自動作成・AIエージェント・スマホアプリ）だけ橙バッジ** |
| SECURITY & PRIVACY（3枚） | ネイビー/緑/青 混在 | feature（green） | 「守る」=解決側なので3枚とも緑 |
| 料金プラン（3枚） | ほぼ良好 | （据え置き） | おすすめ=緑円、他2つ=ネイビー円のまま維持。CTAの緑を`--roota-green`に統一するだけ |

---

## 5. アイコン対応表（lucide-react の例）

アイコンセットは統一必須（塗り/線が混ざらないよう、全カードで同一セット・同一 `strokeWidth`）。

| カード | 推奨アイコン |
|---|---|
| あの決まり、どこ? | `FileSearch` |
| これで合ってる? / 書類・メールのチェック | `ListChecks` |
| 外に出せない情報 / 完全クローズド運用 / 外部送信ゼロ | `Lock` |
| 品質が人まかせ | `ScanSearch` |
| ナレッジ検索 | `Search` |
| 対話で質問 | `MessageCircle` |
| 文書の登録・管理 | `Database` |
| たたき台の自動作成 | `Pencil` |
| 会社・部門ごとに分離 / 会社ごとに完全分離 | `Users` |
| 権限・ユーザー管理 | `KeyRound` |
| 利用状況の把握 | `BarChart3` |
| 議事録自動作成 | `Mic` |
| AIエージェント | `Bot` |
| iPhone / Android アプリ | `Smartphone` |
| 会話本文は誰も覗かない | `EyeOff` |

---

## 6. やってはいけないこと（レビュー用チェックリスト）

- [ ] アイコンタイルにグレーを使っていないか（navy か green のみ）
- [ ] 1セクション内で accent 色が混在していないか
- [ ] オレンジを「開発予定」バッジ以外に使っていないか（CTA・見出しNG）
- [ ] アイコンを白カードに直置きしていないか（必ずティント地の48pxタイル）
- [ ] アイコンの塗り/線スタイルが全カードで揃っているか（同一セット・同一strokeWidth）
- [ ] 緑が `--roota-green`（#2E9E6B）1色に統一されているか（見出し・CTA・accentバーで微妙に違う緑を使っていないか）
- [ ] `.roota-card` に `overflow:hidden` が付いているか（accentバーの角がカードからはみ出ていないか）

---

## 補足

- 現状アイコンにかかっているグラデーションは、フラットなティント地にすると整理されて見えます。グラデを残す場合でも、**割り当てた色相（navy系/green系）の中だけ**で完結させ、青→紫のような色相をまたぐグラデは使わないでください。
- ダークモード対応が必要なら、`--roota-*` を `prefers-color-scheme: dark` 側で別値に差し替える設計にしておくと、カード側のコードは触らずに済みます。
