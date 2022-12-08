<script lang="ts" setup>

const { data: articles } = await useAsyncData('articles',
    () => queryContent('blog')
        .find(),
)

useHead({
    title: 'Blog',
})
</script>

<template>
    <div class="Blog">
        <h1>Blog Page</h1>
        <p>Lorem Ipsum</p>
        <hr class="my-5">
        <div v-for="{ title, description, _path } in articles" class="mb-3">
            <h6 class="font-bold">{{ title }}</h6>
            <p>{{ description }}</p>
            <NuxtLink :to="_path" class="text-blue-500 font-bold">
                Ir al Post
            </NuxtLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
