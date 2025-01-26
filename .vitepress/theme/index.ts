// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import { ref, watch } from 'vue'
import './style.css'

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // 全局主题配置
    const classicThemeKey = 'useClassicTheme'

    const storedUseClassicTheme = localStorage.getItem(classicThemeKey) || true
    const useClassicTheme = ref(storedUseClassicTheme)

    watch(useClassicTheme, newVal => {
      localStorage.setItem(classicThemeKey, newVal)
    })

    app.provide(classicThemeKey, useClassicTheme)
  }
} satisfies Theme

