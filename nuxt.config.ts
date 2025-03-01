// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/image-edge', 'nuxt-svgo'],
    content: {
        documentDriven: true,
        highlight: {
            theme: {
                default: 'github-dark',
            },
            preload: ['diff', 'json', 'js', 'ts', 'css', 'shell', 'html', 'md', 'yaml'],
        },
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
    build: {
        transpile: [
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/vue-fontawesome',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/free-regular-svg-icons',
            '@fortawesome/free-brands-svg-icons',
        ],
    },
    image: {
        cloudinary: {
            baseURL: `https://res.cloudinary.com/brayamvalero/image/upload`,
        },
    },
    runtimeConfig: {
        public: {
            googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION,
        },
    },
})
