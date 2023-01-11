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
            <h1 class="text-title">Bienvenidos a mi sitio</h1>
            <p class="text-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestiae fugiat deserunt amet laboriosam
                eveniet fugit recusandae nemo ad iure!
            </p>
        </section>
        <UserPosts :posts="posts" />
    </div>
</template>
