// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/scripts'],
  $production: {
    scripts: {
      registry: {
        googleAnalytics: {
          id: 'G-D04W0SQ23J',
        }
      }
    }
  }
})