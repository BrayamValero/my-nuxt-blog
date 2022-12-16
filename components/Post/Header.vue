<script lang="ts" setup>
interface Props {
    post: any
}

const props = defineProps<Props>()

const createdAtFormatted = computed(() => {
    return `Publicado el ${useFormattedDate(props.post.created_at)}`
})
</script>

<template>
    <div class="PostHeader">
        <p class="text-caption !text-[.875rem]">{{ createdAtFormatted }}</p>
        <h1 class="text-title !text-[2.125rem]">{{ post.title }}</h1>
        <p class="text-description !text-[1.25rem]">{{ post.description }}</p>
        <div class="flex gap-2 mt-3">
            <NuxtLink v-for="tag in post?.tags" :to="'/blog/category/' + tag" class="badge badge-primary">
                {{ tag }}
            </NuxtLink>
        </div>
    </div>
</template>
