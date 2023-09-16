<script lang="ts" setup>
import BannerProfile from '~~/components/BannerProfile.vue'

// [Nuxt Content] => Querying blog posts content
const { data: posts } = await useAsyncData('getPosts', () => queryContent('blog').limit(3).find())

const baseHeading: any = {
    position: 'start',
    title: 'Mis Publicaciones',
    description: 'Te invito a leer mis publicaciones',
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
            <BaseHeading v-bind="baseHeading">
                <template #actions>
                    <NuxtLink to="/blog" class="btn btn-primary">Ver Mas</NuxtLink>
                </template>
            </BaseHeading>
            <UserPosts :posts="posts" v-bind="baseHeading" />
        </section>
    </div>
</template>

<style lang="postcss"></style>
