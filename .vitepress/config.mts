import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "N",
  description: "Nambu Next",
  titleTemplate: 'N > :title',

  lang: 'zh-CN',

  base: '/N/', // 由于部署时路径的需要
})
