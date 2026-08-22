## Cover

# markdown.dev 大改訂

2026年の実務に対応するMarkdownドキュメント基盤へ

Manus AI | 2026年8月

## Slide 1

# 目的は「試験環境」から「実務ガイド」への転換

- 旧構成はGitBook／Jekyllの確認用ファイルとサンプル投稿が中心
- 本文は最小限で、現行のMarkdown運用を学べる状態ではなかった
- 2026年の執筆・レビュー・公開を一つのワークフローとして再設計

## Slide 2

# 2026年の基準を明確化

- 基本方針はCommonMarkを土台に、GitHubではGFMを日常記法として採用
- GitHub、VS Code、静的サイト、CIで異なる拡張と制約を明示
- AI生成文書も通常の変更と同じ検証・レビュー基準で扱う

> GFMはCommonMarkを基にしたGitHubのMarkdown方言

## Slide 3

# 学習コンテンツを8ページへ再構成

| 領域 | 新設した内容 |
| --- | --- |
| 書く | 基本構文、GFM、図表・数式・メディア |
| 運用する | VS Code、品質管理、公開と移行 |
| 入口 | 方針・使い分け・クイックリファレンス |

- 読者は「記法」から「公開運用」まで段階的に到達

## Slide 4

# 実務で迷う論点を先回りして解説

- タスクリスト、Issue参照、アラート、相対リンクなどのGitHub運用
- Mermaid、KaTeX、表、画像の表示差とアクセシビリティ
- 見出し階層、意味のあるリンク文言、コード例の再現性
- 記法の紹介ではなく、失敗しにくい判断基準を提示

## Slide 5

# Astro Starlightで公開基盤を刷新

- Astro 7.2.4 と Starlight 0.41.7でMarkdown中心の静的サイトを構築
- `src/content/docs/` のMarkdownからサイドバー・検索・サイトマップを生成
- GitHub Pagesのリポジトリパス `/markdown.dev/` を設定に組み込み

## Slide 6

# 執筆品質を「仕組み」で守る

- markdownlintで見出し・リンク・画像代替テキスト・コードフェンスを検査
- PrettierでMarkdownと設定ファイルの表記ゆれを抑制
- VS Codeでローカルリンク検証、移動時のリンク更新提案、画像保存先を標準化

## Slide 7

# 公開をmaster更新に自動接続

- GitHub Actionsがmasterへのプッシュを契機にビルド・GitHub Pages公開
- `withastro/action` と `actions/deploy-pages` を採用
- 初回のみGitHub Pagesの公開元をGitHub Actionsへ設定すれば継続運用可能

## Slide 8

# 品質は静的検査とブラウザ検証で確認

| 検証項目 | 結果 |
| --- | --- |
| Astroコンテンツ検査 | エラー・警告なし |
| Markdown Lint | 11ファイルで問題なし |
| Prettier | 全対象が整形規約に適合 |
| ビルド | 9ページ、サイトマップ、検索インデックスを生成 |
| 依存関係監査 | 高重大度以上の脆弱性 0件 |

## Slide 9

# 改訂の成果と次の一手

- 旧Jekyll／GitBookの試験構成を撤去し、保守可能なドキュメント基盤へ移行
- 公式仕様と現行ツールを引用した、日本語の実務ガイドを提供
- 次の一手はGitHub PagesをGitHub Actions公開へ一度設定し、公開URLで最終確認

> https://watanabe3tipapa.github.io/markdown.dev/
