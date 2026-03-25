// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['@/assets/styles/main.scss'],
  modules: ['@nuxtjs/i18n'],
  
  i18n: {
    locales: [
      { code: 'ru', name: 'Русский', iso: 'ru-RU', file: 'ru.json' },
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
    ],
    defaultLocale: 'ru',
    strategy: 'no_prefix',
    compilation: {
      strictMessage: false,
      escapeHtml: false,
    },
  }
})
