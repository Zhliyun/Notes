import { defineConfig } from 'vitepress'
import techExcerpts from '../tech-excerpts/route.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Notes",
  description: "都是干货分享！",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '技术摘抄', link: '/tech-excerpts/' }
    ],

    sidebar: [
      ...techExcerpts
    ],

    outline: {
      label: '页面导航'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
