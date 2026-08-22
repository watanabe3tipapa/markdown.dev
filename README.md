# Markdown.dev

**Markdown.dev**
は、2026年の実務でMarkdownを執筆・レビュー・公開するための日本語ガイドです。曖昧さの残る「Markdown一般論」ではなく、**CommonMarkを土台にGitHub
Flavored Markdown（GFM）を日常の記法として採用する**方針を明示し、GitHub、VS
Code、静的ドキュメントサイト、CIを横断した運用方法を扱います。

> GitHubで扱うMarkdownはGFMです。GFMはCommonMarkを基にした方言であり、GitHub上ではHTMLへの変換後に追加のサニタイズも行われます。[1]

## このリポジトリで学べること

| 領域     | 内容                                                           | 主な対象                  |
| -------- | -------------------------------------------------------------- | ------------------------- |
| 記法     | 見出し、リンク、引用、リスト、表、コードブロック、脚注         | README、設計書、技術記事  |
| GitHub   | タスクリスト、アラート、Issue・PR参照、差分レビュー            | Issue、Pull Request、Wiki |
| 表現     | Mermaid、数式、画像、代替テキスト、コード例                    | 仕様書、運用手順、教材    |
| 執筆環境 | VS Codeのプレビュー、見出し操作、リンク検証、画像貼付          | ローカル編集              |
| 品質管理 | markdownlint、Prettier、リンク・見出し・アクセシビリティの確認 | CI、レビュー              |
| 公開     | Astro StarlightとGitHub ActionsによるGitHub Pages公開          | ドキュメントサイト        |

## サイト構成

このリポジトリは、旧GitBook／Jekyllの試験用ファイルを廃止し、Astro
Starlightを使う静的ドキュメントサイトに改訂しています。StarlightはAstro上のドキュメントテーマで、`src/content/docs/`
のMarkdownファイルからページを構築します。[2]

| パス                           | 役割                                                 |
| ------------------------------ | ---------------------------------------------------- |
| `src/content/docs/`            | 公開するMarkdownガイドの本文                         |
| `astro.config.mjs`             | サイト名、GitHub Pagesの公開URL、サイドバー構成      |
| `.github/workflows/deploy.yml` | `master` 更新時のビルド・GitHub Pages公開            |
| `.markdownlint.jsonc`          | Markdownの品質ルール                                 |
| `.vscode/settings.json`        | ローカルリンク検証・リンク更新・画像保存先の推奨設定 |

## ローカルで読む・編集する

Node.js **22.19以上**を推奨します。GitHub ActionsではNode.js
24を使ってビルドします。

```bash
git clone https://github.com/watanabe3tipapa/markdown.dev.git
cd markdown.dev
npm ci
npm run dev
```

開発サーバーのURLをブラウザで開くと、更新が即時に反映されます。公開前は次の品質確認を行います。

```bash
npm run lint
npm run format:check
npm run build
```

| コマンド               | 目的                                                                           |
| ---------------------- | ------------------------------------------------------------------------------ |
| `npm run dev`          | ローカル開発サーバーを起動します。                                             |
| `npm run check`        | AstroコンテンツとTypeScript設定を検査します。                                  |
| `npm run lint`         | markdownlintでMarkdownの構造・記法・アクセシビリティに関する問題を検出します。 |
| `npm run format`       | Prettierで対応ファイルを整形します。                                           |
| `npm run format:check` | 整形が必要なファイルを検出します。                                             |
| `npm run build`        | 検査後に公開用の静的ファイルを `dist/` に生成します。                          |
| `npm run preview`      | `dist/` をローカル配信して公開前の表示を確認します。                           |

## 公開方法

`.github/workflows/deploy.yml` は `master`
ブランチへのプッシュと手動実行を契機に、Astroの公式GitHub
Actionでサイトをビルドし、GitHub
Pagesへデプロイします。Astroのリポジトリ型GitHub Pages公開では、`site`
にユーザーサイトURL、`base` にリポジトリ名を設定する必要があります。[3]

GitHubで初回のみ **Settings → Pages → Build and deployment → Source** を
**GitHub Actions** に変更してください。GitHub
Pagesでは、ビルドが必要な静的サイトにGitHub
Actionsを使う公開方法が推奨されています。[4]

公開URLは次のとおりです。

```text
https://watanabe3tipapa.github.io/markdown.dev/
```

## 2026年改訂の方針

旧構成はGitBookとJekyllの確認用ページ、空に近い本文、サンプル投稿で構成されていました。本改訂では、現代的なMarkdownの実務を学ぶための情報設計に置き換えました。特に、GFMと標準的なMarkdownの差異、GitHub上の構造化ワークフロー、エディターによるリンク保守、静的解析、アクセシブルな画像記述、GitHub
Actionsによる公開を一続きの作業として扱います。

AI支援でMarkdownを生成する場合も、生成結果をそのまま公開せず、**事実確認、リンク確認、見出し階層の検査、コード例の実行、画像代替テキストの見直し**を必ず行ってください。AIは下書きを加速できますが、責任ある公開の検証工程を代替しません。

## 参考資料

[1]: https://github.github.com/gfm/ 'GitHub Flavored Markdown Spec'
[2]:
  https://starlight.astro.build/getting-started/
  'Astro Starlight: Getting Started'
[3]:
  https://docs.astro.build/en/guides/deploy/github/
  'Astro: Deploy to GitHub Pages'
[4]:
  https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
  'GitHub Docs: Configuring a publishing source'
