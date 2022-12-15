<script lang="ts" setup>
interface Props {
    post: any
}

const props = defineProps<Props>()

const createdAtFormatted = computed(() => useHumanRedableDate(props.post.created_at))
</script>

<template>
    <div class="PostHeader mb-3">
        <img
            class="w-full h-36 object-cover cursor-pointer rounded-md shadow"
            src="https://i.imgur.com/AD3MbBi.jpeg"
            alt="image"
        />
        <div class="flex gap-2 my-3">
            <NuxtLink v-for="tag in post?.tags" :to="'/blog/category/' + tag" class="badge badge-primary">
                {{ tag }}
            </NuxtLink>
        </div>
        <h1 class="text-title">{{ post.title }}</h1>
        <p class="text-description">{{ post.author }} - {{ createdAtFormatted }}</p>
    </div>
</template>

<style lang="postcss" scoped>
.BlogCard {
}
</style>
