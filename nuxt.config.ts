// https://v3.nuxtjs.org/api/configuration/nuxt.config
require('dotenv').config()
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss','@nuxtjs/dotenv'],
    publicRuntimeConfig: {
        APP_KEY: process.env.APP_KEY,
        APP_ID: process.env.APP_ID,
      }
})
