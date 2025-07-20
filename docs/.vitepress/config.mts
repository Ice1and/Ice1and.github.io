import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Iceland",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsible: true,
        collapsed: false,
        items: [
          { text: '简介', link: '/introduction'}
        ]
      },
      {
        text: 'ML',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '基本术语', link: '/notes/machine-learning/基本术语' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ice1and/Ice1and.github.io' }
    ]
  }
})
