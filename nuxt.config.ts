// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app:{
    head:{
      link:[
        {rel:'stylesheet',href:'https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,300&display=swap'}
      ]
    }
  }
})
