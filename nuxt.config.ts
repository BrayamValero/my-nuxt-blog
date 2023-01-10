// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // ssr: false,
    // target: 'static',
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@vueuse/nuxt'],
    content: {
        documentDriven: true,
        highlight: {
            theme: {
                default: 'github-dark',
            },
            preload: ['diff', 'json', 'js', 'ts', 'css', 'shell', 'html', 'md', 'yaml'],
        },
    },
    colorMode: {
        preference: 'system',
        fallback: 'light',
        classSuffix: '',
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        storageKey: 'nuxt-color-mode',
    },
    css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
    postcss: {
        plugins: {
            // Tailwind Nesting
            'postcss-import': true,
            'tailwindcss/nesting': {},
            'postcss-nested': {},
            // Then, Tailwind
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
