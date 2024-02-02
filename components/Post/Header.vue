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
    <div>
        <p class="text-sm text-red-500">{{ createdAtFormatted }}</p>
        <h1 class="font-bold text-stone-800 text-4xl mt-4 mb-1">{{ post.title }}</h1>
        <p class="text-lg font-light text-stone-500">{{ post.description }}</p>
        <div class="flex gap-2 mt-4">
            <BaseBadge v-for="tag in post?.tags" variant="red" rounded>{{ tag }}</BaseBadge>
        </div>
    </div>
</template>
