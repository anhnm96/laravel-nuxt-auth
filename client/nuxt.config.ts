// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['@unocss/reset/tailwind.css'],
  modules: ['nuxt-auth-sanctum', '@unocss/nuxt'],
  sanctum: {
    baseUrl: 'http://localhost:8000',
    redirect: {
      onLogin: '/dashboard',
      onAuthOnly: '/auth/login',
    },
  },
})
