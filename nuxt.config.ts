// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['@nuxtjs/tailwindcss'],

  build: {
    transpile: ['@heroicons/vue']
  },

  runtimeConfig: {
    jwtAccessSecret: process.env.NUXT_JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.NUXT_JWT_ACCESS_TOKEN_SECRET,
    cloudinaryCloudName: process.env.NUXT_CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey:process.env.NUXT_CLOUDINARY_API_KEY,
    cloudinaryApiSecret:process.env.NUXT_CLOUDINARY_CLOUD_SECRET
  }

})
