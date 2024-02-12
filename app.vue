<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()

const description = 'Brayam Valero, Software Developer, con más de 6 años de experiencia en desarrollo front-end.'

const ogTitle = 'Brayam Valero | Software Developer | Vue, Nuxt & TypeScript'

const xDescription = 'Sitio web donde publicaré contenido referente a Vue, Nuxt, TypeScript y otras tecnologias'

const xCard = 'https://res.cloudinary.com/brayamvalero/image/upload/f_auto,q_auto/v1675266048/pokemon-banner'

const mySite = 'https://brayamvalero.dev/'

useHead({
    htmlAttrs: {
        lang: 'es',
    },
    title: ogTitle,
    titleTemplate: (title) => (title !== ogTitle ? `${title} | Brayam Valero` : title),
    meta: [
        {
            name: 'google-site-verification',
            content: runtimeConfig.public.googleSiteVerification,
        },
        {
            name: 'description',
            content: description,
        },
        // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
        { property: 'og:site_name', content: mySite },
        { property: 'og:type', content: 'website' },
        {
            property: 'og:url',
            content: mySite,
        },
        {
            property: 'og:title',
            content: ogTitle,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: xCard,
        },
        // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
        { name: 'twitter:site', content: '@brayamvalero' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
            name: 'twitter:url',
            content: mySite,
        },
        {
            name: 'twitter:title',
            content: ogTitle,
        },
        {
            name: 'twitter:description',
            content: xDescription,
        },
        {
            name: 'twitter:image',
            content: xCard,
        },
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
            rel: 'canonical',
            href: mySite,
        },
    ],
})
</script>

<template>
    <div class="app">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
