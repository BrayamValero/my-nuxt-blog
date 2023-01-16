<script lang="ts" setup>
// [Nuxt Content] => Querying blog posts content
const { data: posts } = await useAsyncData('getPosts', () => queryContent('blog').limit(3).find())

useHead({
    title: 'Home',
})
</script>

<template>
    <div class="Home">
        <section class="Hero mb-10">
            <h1 class="text-[3rem] text-gray-800 font-bold dark:text-white">Web Developer & Designer</h1>
            <p class="text-[1rem] text-gray-500 font-light dark:text-gray-400">
                Hi there! My name is Brayam. I design and develop websites with bold typography, subtle gradients and
                modern technology. I am a stickler for details, dedicated to gaming, coffee and music.
            </p>
        </section>
        <UserPosts :posts="posts" />
    </div>
</template>
