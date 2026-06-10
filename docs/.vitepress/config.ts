import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'hi-go',
  description: 'Go learning notes powered by VitePress.',
  base: process.env.BASE_URL ?? '/hi-go/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '语法', link: '/syntax/variables' },
      { text: 'QA', link: '/qa/hello-world' },
      { text: 'issue', link: 'https://github.com/Huauauaa/hi-go/issues' }
    ],
    sidebar: [
      {
        text: '语法',
        items: [{ text: '变量定义', link: '/syntax/variables' }]
      },
      {
        text: 'QA',
        items: [
          { text: 'Hello World', link: '/qa/hello-world' },
          { text: 'Go 的逃逸分析是什么', link: '/qa/escape-analysis' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/Huauauaa/hi-go' }]
  }
})
