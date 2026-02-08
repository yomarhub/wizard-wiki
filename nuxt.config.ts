// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image', '@nuxt/test-utils', '@vee-validate/nuxt', '@nuxtjs/i18n', '@pinia/nuxt'],

  // Remove autoPrefix from component imports
  components: {
    dirs: [{ path: '~/components', pathPrefix: false }]
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      API_BASE_URL: 'https://hp-api.onrender.com/api'
    }
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/main.scss" as *;',
          quietDeps: true
        }
      }
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    lazy: true,
    types: 'composition',
    langDir: 'locales/',
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [
      { code: 'en', files: ['en/common.json', 'en/index.json', 'en/sidebar.json', 'en/characters.json', 'en/login.json'], name: 'English' },
      { code: 'fr', files: ['fr/common.json', 'fr/index.json', 'fr/sidebar.json', 'fr/characters.json', 'fr/login.json'], name: 'Français' }
    ]
  }
})
