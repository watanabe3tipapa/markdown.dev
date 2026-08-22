import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://watanabe3tipapa.github.io',
  base: '/markdown.dev',
  vite: {
    preview: {
      allowedHosts: ['.manus.computer'],
    },
  },
  integrations: [
    starlight({
      title: 'Markdown.dev',
      description: '2026年の実務で使うMarkdownガイド',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/watanabe3tipapa/markdown.dev',
        },
      ],
      sidebar: [
        {
          label: 'はじめに',
          items: [
            { label: 'Markdown.devについて', slug: 'index' },
            { label: 'クイックリファレンス', slug: 'quick-reference' },
          ],
        },
        {
          label: '書く',
          items: [
            { label: '基本構文と構造', slug: 'syntax' },
            { label: 'GitHubで使うGFM', slug: 'github' },
            { label: '図表・数式・メディア', slug: 'rich-content' },
          ],
        },
        {
          label: '運用する',
          items: [
            { label: 'VS Code執筆環境', slug: 'authoring' },
            { label: '品質管理と自動化', slug: 'quality' },
            { label: '公開と移行', slug: 'publishing' },
          ],
        },
      ],
    }),
  ],
});
