// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode',],
    content: {
        documentDriven: true
    },
    colorMode: {
        preference: 'system',
        fallback: 'light',
        classSuffix: '',
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        storageKey: 'nuxt-color-mode'
    },
    css: ['/assets/scss/main.scss'],
})
