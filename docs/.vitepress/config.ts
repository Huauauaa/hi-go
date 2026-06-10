import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'hi-go',
  description: 'A VitePress site with a Go hello world example.',
  base: process.env.BASE_URL ?? '/hi-go/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Go Hello World', link: '/go-hello-world' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Go Hello World', link: '/go-hello-world' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/Huauauaa/hi-go' }]
  }
})
