<script lang="ts" setup>
// [Nuxt Content] => Querying blog posts content
const { data: posts } = await useAsyncData('posts', () => queryContent('blog').limit(3).find())

// [Nuxt - LazyAsyncData] => Querying Github Repositories
const { pending, data: repositories } = useLazyAsyncData('repositories', () =>
    $fetch('https://api.github.com/users/brayamvalero/repos')
)

useHead({
    title: 'Home',
})
</script>

<template>
    <div class="Home">
        <h2 class="font-bold my-3">My Repositories</h2>
        <UserRepositories :repositories="repositories" />
        <h2 class="font-bold my-3">My Blog Posts</h2>
        <UserPosts :posts="posts" />
    </div>
</template>

<style lang="scss" scoped></style>
