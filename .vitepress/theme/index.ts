// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import { ref, watch } from 'vue'
import './style.css'

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    const TAG = 'EnhanceApp'

    // 全局主题配置
    const classicThemeKey = 'isClassicTheme'

    if (import.meta.env.SSR) {
      console.log(TAG, 'SSR Polyfill LocalStorage')

      globalThis.localStorage = {
        setItem: (k, v) => {
          console.log(TAG, 'SSR LocalStorage Set', k, v)
        }, getItem: (k) => {
          console.log(TAG, 'SSR LocalStorage Get', k)
          return null
        }
      } as any
    }

    let storedIsClassicTheme = localStorage.getItem(classicThemeKey) || true
    if (storedIsClassicTheme === 'homo no') storedIsClassicTheme = false

    const isClassicTheme = ref(storedIsClassicTheme)

    console.log(TAG, 'IsClassicTheme', storedIsClassicTheme)

    watch(isClassicTheme, newVal => {
      console.log(TAG, 'Watch IsClassicTheme', newVal)
      localStorage.setItem(classicThemeKey, newVal === true ? '111' : 'homo no')
    })

    app.provide(classicThemeKey, isClassicTheme)
  }
} satisfies Theme

