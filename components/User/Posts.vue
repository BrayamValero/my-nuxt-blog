<script lang="ts" setup>
interface Props {
    posts: any
    title?: string
}

withDefaults(defineProps<Props>(), {
    title: 'Mis Publicaciones',
})
</script>

<template>
    <div class="UserPosts">
        <h1 class="text-heading dark:text-white mb-4">{{ title }}</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PostCard v-for="post in posts" :post="post" />
        </div>
    </div>
</template>
