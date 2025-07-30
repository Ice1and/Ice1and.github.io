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
        items: [
          { text: 'Resume', link: '/introduction'}
        ]
      },
      {
        text: 'ML',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Basic Terms', link: '/notes/Machine-Learning/基本术语' }
        ]
      },
      {
        text: "LLM",
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: "Prompt Engineering",
            collapsible: true,
            collapsed: true,
            items: [
              { text: "Introduction", link: "/notes/LLM/ChatGPT-Prompt-Engineering-for-Developers/Introduction" },
              { text: "Guidelines", link: "/notes/LLM/ChatGPT-Prompt-Engineering-for-Developers/Guidelines" },
            ]
          }
        ]
      },
      {
        text: "Design Patterns",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Introduction", link: "/notes/Design-Patterns/Design Patterns Introduction" },
          {
            text: "Creational Pattern",
            collapsible: true,
            collapsed: true,
            items: [
              { text: "Singleton Pattern", link: "/notes/Design-Patterns/Creational-Pattern/Singleton Pattern" }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ice1and/Ice1and.github.io' }
    ],

    // 配置项
    outline: {
      level: [2, 3]
    },
    search: {
      provider: "local"
    },
    lastUpdated: {
      text: "最后编辑于"
    }
  }
})
