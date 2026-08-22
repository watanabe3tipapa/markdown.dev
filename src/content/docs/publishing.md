---
title: 公開と移行
description: Astro StarlightでMarkdownを公開し、GitHub Pagesで継続運用する
---

Markdownをリポジトリに置くだけでは、読み手にとって使いやすいドキュメントにはなりません。サイト構造、検索、ナビゲーション、公開URL、更新手順を整えることで、Markdownは継続的に参照できる知識資産になります。

このリポジトリでは、Astro
Starlightを使って`src/content/docs/`のMarkdownをドキュメントサイトとして生成し、GitHub
ActionsからGitHub Pagesへ公開します。

## なぜAstro Starlightか

StarlightはAstro上のドキュメントテーマで、`src/content/docs/`内のMarkdownからページを作り、サイドバー、目次、検索、アクセシビリティを考慮したドキュメントUIを提供します。[1]
Markdown本文とサイト設定を分けられるため、執筆者は本文に集中し、サイト運用者はナビゲーションと公開設定を管理できます。

| 役割                | このリポジトリでの場所                 |
| ------------------- | -------------------------------------- |
| 本文                | `src/content/docs/*.md`                |
| ナビゲーション      | `astro.config.mjs` の `sidebar`        |
| コンテンツスキーマ  | `src/content.config.ts`                |
| 公開URLとベースパス | `astro.config.mjs` の `site` と `base` |
| 自動公開            | `.github/workflows/deploy.yml`         |

## ローカル確認

```bash
npm ci
npm run dev
```

ブラウザで開いたサイトでは、サイドバーの並び、相互リンク、表、コードブロック、Mermaidなどを確認します。公開直前は必ず次を実行します。

```bash
npm run lint
npm run format:check
npm run build
npm run preview
```

`npm run preview`は生成済みの`dist/`を配信するため、開発サーバーだけでは見落としやすい公開用パスの不整合を確認できます。

## GitHub Pagesで公開する

GitHub Pagesでは、ソースブランチから直接公開する方法と、GitHub
Actionsでビルド・デプロイする方法があります。Jekyll以外のビルド工程を使う静的サイトでは、GitHub
Actionsによる公開が推奨されます。[2]

Astro公式の公開ガイドに従い、このリポジトリには次の構成を設定しています。

1. `master`へのプッシュ、または手動実行でワークフローを起動する。
2. `withastro/action`がロックファイルを検出して依存関係を導入し、サイトをビルドする。
3. `actions/deploy-pages`が生成したサイトをGitHub Pagesへデプロイする。

初回のみ、GitHubの**Settings → Pages → Build and deployment → Source**を**GitHub
Actions**に設定してください。以後は`master`へのマージが公開を開始します。

## リポジトリ型Pagesのパス

プロジェクトサイトのURLは通常、`https://<user>.github.io/<repository>/`の形です。Astroでは、`site`にユーザーサイトのURL、`base`にリポジトリ名を設定して、アセットと内部リンクを正しい公開パスへ解決します。[3]

```js
export default defineConfig({
  site: 'https://watanabe3tipapa.github.io',
  base: '/markdown.dev',
});
```

リポジトリ名を変える場合は、`base`、公開URL、READMEの案内、必要に応じて外部リンクを同時に更新してください。組織サイトやカスタムドメインへ移す場合は、AstroとGitHub
Pagesの公式手順を再確認します。

## 旧構成からの移行

旧リポジトリにはGitBookリンク、Jekyllの試験用設定、サンプル投稿がありました。これらは現行の学習コンテンツや公開手順を提供していなかったため、Astro
Starlight構成へ置き換えました。

移行で特に確認すべき点は次のとおりです。

- 旧URLを外部サイトやブックマークで参照していないか。
- `docs/`をGitHub Pagesの公開元として設定していないか。
- GitBook上に残すべき独自コンテンツがないか。
- `master`へのプッシュでGitHub Actionsのデプロイが成功するか。
- 公開後に`https://watanabe3tipapa.github.io/markdown.dev/`で画像・内部リンクが正しく動くか。

公開設定を切り替える前に、GitHub
Pagesは公開リポジトリの静的サイトをインターネット上へ公開する点を再確認し、秘密情報を含むファイルがないことを確認してください。[2]

## 参考資料

[1]:
  https://starlight.astro.build/getting-started/
  'Astro Starlight: Getting Started'
[2]:
  https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
  'GitHub Docs: Configuring a publishing source'
[3]:
  https://docs.astro.build/en/guides/deploy/github/
  'Astro: Deploy to GitHub Pages'
