<script lang="ts" setup>
interface Props {
    posts: any
}

defineProps<Props>()
</script>

<template>
    <div class="UserPosts">
        <div class="grid grid-cols-3 gap-4">
            <PostCard v-for="post in posts" :post="post" />
        </div>
    </div>
</template>
