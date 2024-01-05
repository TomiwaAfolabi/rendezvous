// https://nuxt.com/docs/api/configuration/nuxt-confi
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', 'nuxt-icon'],
  css: ['~/assets/scss/main.scss'],
  devtools: { enabled: true },
  runtimeConfig:{
    googleMapKey: process.env.GOOGLE_MAPS_API_KEY || process.env.GMapID
    
  }

})
