// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', 'nuxt-icon'],
  css: ['~/assets/scss/main.scss'],
  devtools: { enabled: true }
})
