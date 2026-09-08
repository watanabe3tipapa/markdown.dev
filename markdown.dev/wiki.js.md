---
description: Notation in wiki.js, an excellent wiki tool
---

# 📖 Wiki.js

> <mark style="background-color:green;">**Excerpt from the official website**</mark>

## Editors

Using the various editors of Wiki.js



When creating a page, you can use the editor of your choice. Some users prefer to write content in Markdown while others might prefer a more visual editor.

### List of Editors <a href="#list-of-editors" id="list-of-editors"></a>

* [Code _Raw HTML_](https://docs.requarks.io/editors/code)
* [Markdown _Plain Text Formatting_](https://docs.requarks.io/editors/markdown)
* [Visual Editor _Rich-Text WYSIWYG_](https://docs.requarks.io/editors/visualeditor)

### Change Editor <a href="#change-editor" id="change-editor"></a>

> This feature is available from version **2.5.201 and up**.

You can change the editor used for any page using the **Convert** action. This will attempt to convert the content to be used by the newly selected editor. For example, a page previously created with the Markdown editor can be converted to HTML to be used with the Visual Editor.

From the **Page Actions** menus (located at the top-right corner and bottom-right corner), select **Convert**. The following dialog is shown:

![ui-convert-page-dialog.png](https://docs.requarks.io/assets/ui/ui-convert-page-dialog.png)

Select the editor you want to use going forward and click **Convert**.

> ![⚠️](https://docs.requarks.io/_assets/svg/twemoji/26a0.svg) **Important**
>
> Because of differences between editor / format capabilities, some formatting or non-rendered content may be lost after the conversion.
>
> A snapshot of the page is **automatically taken before the conversion** and you can revert or refer to this version **at any time afterwards** from the page history.
>
> _Examples_
>
> ∗ When going from Markdown to HTML, `draw.io` diagrams will be kept as their final rendered image. You will no longer be able to edit the diagram.\
> ∗ When going from Markdown to HTML, tabsets will be reverted to standard headers and paragraphs (as seen in the markdown editor).\
> ∗ When going from HTML to Markdown, custom CSS classes and HTML elements that don't exist in the Markdown language will not be preserved.

As a reference, the following format conversions occur based on the source / target editor selected:

| Source        | Target        | Format Conversion             |
| ------------- | ------------- | ----------------------------- |
| Markdown      | Visual Editor | Markdown -> HTML              |
| Markdown      | Raw HTML      | Markdown -> HTML              |
| Visual Editor | Markdown      | HTML -> Markdown              |
| Visual Editor | Raw HTML      | _no format conversion needed_ |
| Raw HTML      | Markdown      | HTML -> Markdown              |
| Raw HTML      | Visual Editor | _no format conversion needed_ |

\---

### CodeEditor

***

#### Overview <a href="#overview" id="overview"></a>

The Code editor is a basic raw HTML editor.

> _It's generaly not recommended to use this editor to write new content. This editor is provided as a convenience to import existing content from older systems which is only available in raw HTML._

#### User Guide <a href="#user-guide" id="user-guide"></a>

Only Wiki.js specific stylings are listed below.

#### Content Tabs <a href="#content-tabs" id="content-tabs"></a>

* Usage
* Code Example

> This feature is only available from version 2.4 and up.

Using headers and adding the `tabset` css class to the parent header. The parent header text will not be shown in the final result.

Note that you can use any header level, as long as the children headers are one level higher. For example, if a parent header is `<h3>`, the tabs headers must be `<h4>`. The maximum header level for a parent being `<h5>` and the children `<h6>`.



\---





## MarkdownEditor

<mark style="background-color:green;">**This part is critical.**</mark>

### Overview <a href="#overview" id="overview"></a>

Markdown is a lightweight markup language with plain text formatting syntax. It's the de-facto syntax for writing documentation on major code repositories such as GitHub.

Wiki.js supports the full [CommonMark specification](https://spec.commonmark.org/) + adds some useful extensions (including the Github Flavored Markdown addons).

### User Guide <a href="#user-guide" id="user-guide"></a>

### Blockquotes <a href="#blockquotes" id="blockquotes"></a>

* Usage
* Shortcuts
* Examples
* Stylings

Using a **greater-than** symbol, followed by a space, before each line of text.

### Bold <a href="#bold" id="bold"></a>

* Usage
* Shortcuts
* Examples

Using **double asterisks** symbols before and after the text selection.

### Code Blocks <a href="#code-blocks" id="code-blocks"></a>

* Usage
* Shortcuts
* Examples
* Syntax Highlighting

Using **triple backticks** symbols before and after the text selection, on dedicated lines.

### Content Tabs <a href="#content-tabs" id="content-tabs"></a>

* Usage
* Examples

> This feature is only available from version 2.4 and up.

Using headers and adding the `{.tabset}` class to the parent header. The parent header text will not be shown in the final result.

Note that you can use any header level, as long as the children headers are one level higher. For example, if a parent header is `###` _(h3)_, the tabs headers must be `####` _(h4)_. The maximum header level for a parent being 5 and the children 6.

### Emojis <a href="#emojis" id="emojis"></a>

* Usage
* Examples

Using the syntax `:identifier:`

See the [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/) for the full list of possible options.

### Footnotes <a href="#footnotes" id="footnotes"></a>

* Usage
* Examples

Use the syntax `[^1]` for the location of the footnote in the main text, and `[^1]: this is a footnote` for the actual footnote. Footnotes themselves will automatically appear at the bottom of the page under a horizontal line.

### Headers <a href="#headers" id="headers"></a>

* Usage
* Shortcuts
* Examples

Using between 1 and 6 **hashtag** symbol(s), followed by a space, before the text selection.

### Horizontal Line <a href="#horizontal-line" id="horizontal-line"></a>

* Usage
* Shortcuts
* Examples

Using **triple dash** symbols on a dedicated line.

### Images <a href="#images" id="images"></a>

* Usage
* Shortcuts
* Examples
* Dimensions

Using the syntax `![Image Caption](Image Source)`.

### Inline Code <a href="#inline-code" id="inline-code"></a>

* Usage
* Shortcuts
* Examples

Using a **backtick** symbol before and after the text selection.

### Italic <a href="#italic" id="italic"></a>

* Usage
* Shortcuts
* Examples

Using a **single asterisk** symbol before and after the text selection.

### Keyboard Keys <a href="#keyboard-keys" id="keyboard-keys"></a>

* Usage
* Shortcuts
* Examples

Using `<kbd>` before and `</kbd>` after the text selection.

### Links <a href="#links" id="links"></a>

* Usage
* Shortcuts
* Examples

Using the syntax `[Link Text](Link Target)`.

### Mermaid Diagrams <a href="#mermaid-diagrams" id="mermaid-diagrams"></a>

* Usage
* Examples

Using a code block with the language **mermaid**.

Refer to [Mermaid website](https://mermaid-js.github.io/mermaid) for the language reference.

### Ordered Lists <a href="#ordered-lists" id="ordered-lists"></a>

* Usage
* Shortcuts
* Examples

Using an **number**, followed by a **dot** symbol, followed by a space, before each line of text.

### PlantUML Diagrams <a href="#plantuml-diagrams" id="plantuml-diagrams"></a>

* Usage
* Examples

Using a code block with the language **plantuml**.

Refer to [PlantUML website](https://plantuml.com/) for the language reference.

### Strikethrough <a href="#strikethrough" id="strikethrough"></a>

* Usage
* Shortcuts
* Examples

Using **double tildes** symbols before and after the text selection.

### Subscript <a href="#subscript" id="subscript"></a>

* Usage
* Shortcuts
* Examples

Using a **single tilde** symbol before and after the text selection.

### Superscript <a href="#superscript" id="superscript"></a>

* Usage
* Shortcuts
* Examples

Using a **single caret** symbol before and after the text selection.

### Task Lists <a href="#task-lists" id="task-lists"></a>

* Usage
* Examples

Using the syntax `- [ ]` or a `- [x]`.

### [¶](https://docs.requarks.io/editors/markdown#unordered-lists)Unordered Lists <a href="#unordered-lists" id="unordered-lists"></a>

* Usage
* Shortcuts
* Examples
* Stylings

Using an **asterisk** or a **dash** symbol, followed by a space, before each line of text.



\---



### Visual EditorRich-Text WYSIWYG Editor

#### Overview <a href="#overview" id="overview"></a>

The Visual Editor is perfect for non-technical users who prefer a direct visual representation of what they are writing. It's based on the popular **CKEditor 5** software.





\---





{% hint style="success" %}
[https://docs.requarks.io/editors](https://docs.requarks.io/editors)
{% endhint %}



