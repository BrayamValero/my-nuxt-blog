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
        <div class="grid grid-cols-4 grid-rows-5 gap-6 mt-8">
            <div class="col-span-2 row-span-2">
                <BannerProfile />
            </div>
            <div class="col-start-3">
                <BannerAction
                    title="Freelance"
                    description="Necesitas un servicio? Cotizalo conmigo ahora!"
                    url="google.com"
                />
            </div>
            <div class="col-start-3 row-start-2">
                <BannerAction
                    title="Perfil"
                    description="Quieres sabes mas sobre mi? Revisa mi curriculum"
                    url="google.com"
                />
            </div>
            <div class="col-start-4 row-start-1">
                <BannerAction
                    title="Contactame"
                    description="Quieres enviarme un mensaje? Estas a un click de lograrlo"
                    url="google.com"
                />
            </div>
            <div class="col-start-4 row-start-2">
                <BannerAction
                    title="Blog"
                    description="Quieres leer cosas interesantes? Lee mis publicaciones"
                    url="google.com"
                />
            </div>
        </div>

        <!-- Home Hero -->
        <!-- <section class="Home-hero mt-20 mb-14"> -->
        <!-- </section> -->
        <!-- Home Posts -->
        <!-- <section class="Home-posts section-spacing">
            <BaseHeading v-bind="baseHeading" />
            <UserPosts :posts="posts" v-bind="baseHeading" />
        </section> -->
    </div>
</template>
<style lang="postcss">
.Home {
    &-card {
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
    }
}
</style>
