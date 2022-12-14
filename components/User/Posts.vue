<script lang="ts" setup>
interface Props {
    posts: any
}

defineProps<Props>()
</script>

<template>
    <div class="UserPosts">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PostCard v-for="post in posts" :post="post" />
        </div>
    </div>
</template>
