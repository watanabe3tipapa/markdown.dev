---
title: GitHubで使うGFM
description: README、Issue、Pull Requestで使うGitHub Flavored Markdownの実践
---

GitHubではGFMがREADME、Issue、Pull
Request、Discussionなどのユーザーコンテンツに使われます。GFMはCommonMarkの上位互換ですが、GitHubは表示時に安全性と一貫性のため追加処理を行うため、任意のHTMLやスクリプトが使えるわけではありません。[1]

## READMEは利用者の入口

READMEは「何のためのリポジトリか」「どう始めるか」「どう検証するか」を最短で伝える文書です。機能一覧を長く並べる前に、次の順番を意識します。

1. プロジェクト名と一文の目的。
2. 対象利用者と前提条件。
3. 最短のセットアップ手順。
4. 検証、公開、貢献の導線。
5. ライセンスと問い合わせ先。

バッジ、スクリーンショット、詳細な設計資料は補助です。最初の画面で利用者が次の行動を選べることを優先してください。

## IssueとPull Requestの参照

GitHubでは`#123`のような番号参照、`owner/repository#123`のようなクロスリポジトリ参照、コミットSHA、ユーザー名のメンションを文脈に応じて使えます。変更説明では、参照だけで完結させず、「なぜ関連するか」を文章でも説明します。

```md
Fixes #123

ログイン後のリダイレクト先を統一し、#123で報告された相対パスの不整合を解消します。
```

`Fixes #123`や`Closes #123`のようなキーワードは、Pull
Requestが既定ブランチにマージされたときにIssueを閉じる運用に使えます。誤って閉じたくない参照では、単に`#123`と書きます。

## タスクリストと作業の追跡

タスクリストはチェック可能な作業項目を表示する便利な記法です。

```md
- [x] 既存挙動を再現する
- [ ] テストケースを追加する
- [ ] リリースノートを更新する
```

Issue本文では、タスクリストの進捗表示、Issue参照、項目のIssue化といった機能が利用できます。[2]
一方で、GitHubは2025年にTasklist
blocksを廃止しており、複数Issueを明示的な親子関係で追跡する用途では**sub-issues**が代替として案内されています。[2]

## アラートで注意を区別する

GFMのアラートは、読み飛ばすと危険な情報を通常の段落から分離するために使います。種類を増やしすぎず、内容の重要度で選びます。

```md
> [!NOTE] 補足情報です。

> [!TIP] 作業を速くするヒントです。

> [!IMPORTANT] 守らないと期待どおりに動作しない前提です。

> [!WARNING] 破壊的な操作や復旧が難しいリスクです。

> [!CAUTION] 重大な損失につながる操作です。
```

アラートだけに必要手順を書かず、具体的な行動、対象範囲、復旧方法を本文に示してください。

## 表、折りたたみ、HTMLの扱い

表は属性の比較に向きますが、複数段落や長い手順には不向きです。`<details>`と`<summary>`はGitHubで段階的開示を作る際に役立ちますが、すべてのMarkdownレンダラーで同じように扱われるわけではありません。

```html
<details>
  <summary>トラブルシューティングを表示</summary>

  `npm ci` を実行後に、もう一度ビルドしてください。
</details>
```

HTMLを使う場合は、GitHub以外の公開先での表示を確認し、重要な情報を折りたたみの中だけに置かないようにします。

## 安全な公開のために

GitHub上のMarkdownではHTMLがサニタイズされますが、ドキュメントに秘密情報を載せないという基本は変わりません。[1]
トークン、Cookie、内部URL、個人情報、顧客データ、実運用の接続文字列を貼り付ける前に、公開範囲を確認してください。

## 参考資料

[1]: https://github.github.com/gfm/ 'GitHub Flavored Markdown Spec'
[2]:
  https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists
  'GitHub Docs: About tasklists'
