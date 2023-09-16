<script lang="ts" setup>
import BannerProfile from '~~/components/BannerProfile.vue'

// [Nuxt Content] => Querying blog posts content
const { data: posts } = await useAsyncData('getPosts', () => queryContent('blog').limit(3).find())

const baseHeading: any = {
    caption: 'Te invito a leer',
    title: 'Mis Publicaciones',
    description: 'Aquí podras ver mis últimas publicaciones, normalmente no subo muchas cosas',
    position: 'center',
}

useHead({
    title: 'Inicio',
})
</script>

<template>
    <div class="Home">
        <!-- Home Hero -->
        <div class="bg-red-400">
            <div class="container grid grid-cols-4 gap-6 py-16">
                <BannerProfile class="xl:col-span-2 col-span-full row-span-2" />

                <BannerAction
                    class="lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-full"
                    title="Freelance"
                    description="¿Necesitas un servicio? ¡Cotízalo conmigo ahora!"
                    url="google.com"
                />

                <BannerAction
                    class="lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-full"
                    title="Perfil"
                    description="¿Quieres saber más sobre mí? ¡Revisa mi currículum!"
                    url="google.com"
                />

                <BannerAction
                    class="lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-full"
                    title="Contactame"
                    description="¿Quieres enviarme un mensaje? ¡Estás a un clic de lograrlo!"
                    url="google.com"
                />

                <BannerAction
                    class="lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-full"
                    title="Blog"
                    description="¿Quieres leer cosas interesantes? ¡Lee mis publicaciones!"
                    url="google.com"
                />
            </div>
        </div>

        <section class="Home-posts container section-spacing">
            <BaseHeading v-bind="baseHeading" />
            <UserPosts :posts="posts" v-bind="baseHeading" />
        </section>
    </div>
</template>
<style lang="postcss">
.Home {
    &-hero {
    }
    /* &-card {
        @apply w-full mx-auto relative flex flex-col bg-white border rounded-md;
        @screen md {
            @apply w-4/5;
        }
        @screen lg {
            @apply w-3/5;
        }
        &-caption {
            @apply text-red-500 font-bold;
        }
        &-title {
            @apply text-[1.5rem] text-stone-800 font-bold;
        }
        &-description {
            @apply text-[1rem] text-stone-500 font-light;
        }
        &-small {
            @apply text-sm text-stone-900 font-light;
        }
        &-body {
            @apply pb-7 pt-14 px-7 flex-1;
        }
        &-img {
            @apply absolute rounded-full w-24 h-24 block mx-auto object-cover mx-auto left-0 right-0 top-[-3rem];
        }
        &-items {
            @apply flex flex-wrap justify-center gap-4 my-3;
            & > li {
                @apply text-sm text-stone-400 font-light flex items-center gap-2;
                & > svg {
                    @apply text-red-500;
                }
            }
        }
    } */
}
</style>
