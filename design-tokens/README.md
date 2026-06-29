# ROOTA Design Tokens

ROOTA ブランドのカラー／フォントの**正準セット**です。LP（roota.ktgs.llc）を出典とし、
SaaS 本体と色味を揃えるために共有します。

## ファイル

| ファイル | 用途 |
|---|---|
| `roota-tokens.json` | W3C DTCG 形式。Style Dictionary 等のツールで各プラットフォームへ変換可 |
| `roota-tokens.css` | CSS カスタムプロパティ（`:root`）。素のCSS/任意FWに最速で導入 |
| `tailwind.v3.cjs` | Tailwind CSS v3（`tailwind.config.js` の `theme.extend`）用 |
| `tailwind.v4.css` | Tailwind CSS v4（CSS-first `@theme`）用。LP本体と同じ方式 |

SaaS が使っている方式に合わせて、いずれか1つを取り込めばOKです。

## まず揃える「コア5色」

| 役割 | HEX |
|---|---|
| ブランドグリーン（主役） | `#2E9E6B` |
| ネイビー（見出し・文字） | `#0F1F3D` |
| 本文グレー | `#5B6577` |
| ボーダー | `#E3E8EF` |
| 背景（白／淡色） | `#FFFFFF` ／ `#F4F6FB` |

> ロゴと同じ「グリーン＋ネイビー」。**`#2E9E6B` と `#0F1F3D` を合わせれば**全体のトーンが一致します。

## 使い方のルール

- **グリーン `#2E9E6B`** … CTA・アクセント・リンク・強調。色＝意味の主役。
- **ネイビー `#0F1F3D`** … 見出し／濃い文字。`#5B6577` は本文・補足。
- **背景** … 白 `#FFFFFF` と淡色 `#F4F6FB` を**交互**に。淡い緑バンドは `#F0F8F4`（= green-500 を白に8%）。
- **オレンジ `#F4A23B`** … **「開発予定 / coming soon」バッジ専用**。他の用途には使わない。
- アイコンは淡地タイル（`#E8F4EE`）＋濃い緑の線（`#1F7A50`）で統一すると、LPと同じ見え方になります。

## フォント

- 欧文・数字：**Inter** ／ 和文：**Noto Sans JP**
- 本文：`line-height: 1.8` ／ `letter-spacing: 0.04em` ／ `font-feature-settings: "palt" 1`

## 正準化メモ（LP実装との差分）

共有用に、LP内で歴史的に重複していた値を**1つに統一**しています。SaaS 側はこの正準値の採用を推奨します。

| 項目 | LP実装に残る別値 | 本トークンの正準値 |
|---|---|---|
| ネイビー（カード見出し用 `roota-navy`） | `#16223D` | **`#0F1F3D`**（navy-900 に統一） |
| 淡いページ背景（`roota-page`） | `#F4F7FA` | **`#F4F6FB`**（mist に統一） |

差はごく僅かで、見た目への影響はありません。LP側も将来この正準値へ寄せる予定です。
