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
        <h2 class="font-bold">My Blog Posts</h2>
        <input type="search" v-model="filter" class="border rounded my-3" placeholder="search" />
        <UserPosts :posts="posts" />
    </div>
</template>

<style lang="scss" scoped></style>
