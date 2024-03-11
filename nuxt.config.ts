// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'MyBooking Nuxt',
      meta:[
        {name: 'description', content: 'Corol your VfY booking in MyBooking Nuxt'}
      ],
      link: [
        {rel: 'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig: {
    testKey: process.env.TEST, // useable server only
    public: {
      otherKey: process.env.TEST // useable in front-end and server
    }
  }
})
