<script lang="ts" setup>
const { data: posts } = await useAsyncData('posts', () => queryContent('blog').find())

useHead({
    title: 'Blog',
})
</script>

<template>
    <div class="Blog">
        <h1>Blog Page</h1>
        <p>Lorem Ipsum</p>
        <hr class="my-5" />
        <UserPosts :posts="posts" />
    </div>
</template>

<style lang="scss" scoped></style>
