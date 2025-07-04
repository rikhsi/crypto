// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['@/assets/styles/main.scss'], 
  icon: {
    mode: 'css',
    provider: 'server', 
    size: '24px',
    class: 'icon',
    cssLayer: 'base',
    customCollections: [
      {
        prefix: 'custom',
        dir: './assets/icons'
      },
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
             additionalData: `@use "@/assets/styles/mixins" as *;`
        }
      }
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils'
  ]
})