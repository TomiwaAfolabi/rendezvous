// https://nuxt.com/docs/api/configuration/nuxt-confi
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', 'nuxt-icon','@nuxt/test-utils/module'],
  
  css: ['~/assets/scss/main.scss'],
  devtools: { enabled: true },
  runtimeConfig:{
    public:{
      googleMapKey: process.env.NUXT_GOOGLE_MAPS_API_KEY 
    }

  }

})
