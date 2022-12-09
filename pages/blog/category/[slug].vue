<script lang="ts" setup>
const {
    params: { slug },
} = useRoute()

const { data: posts } = await useAsyncData(`posts-${slug}`, () =>
    queryContent('blog')
        .where({ tags: { $contains: slug } })
        .sort({ date: -1 })
        .find()
)

useHead({
    title: 'Categories - ' + slug,
})
</script>

<template>
    <div class="Category">
        <!-- <pre>{{ posts }}</pre> -->
        <h2 class="font-bold my-3">My Posts - {{ slug }}</h2>
        <UserPosts :posts="posts" />
    </div>
</template>

<style lang="scss" scoped></style>
