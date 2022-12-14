<script lang="ts" setup>
const { data } = await useAsyncData('posts', () => queryContent('blog').find())
const posts = ref(data)

const filter = ref('')
watch(filter, async (newVal) => {
    posts.value = await queryContent('blog')
        .where({ title: { $contains: newVal } })
        .find()
})

useHead({
    title: 'Blog',
})
</script>

<template>
    <div class="Blog">
        <h1>Blog Page</h1>
        <p>Lorem Ipsum</p>
        <hr class="my-5" />
        <input type="search" v-model="filter" />
        <UserPosts :posts="posts" />
    </div>
</template>

<style lang="scss" scoped></style>
