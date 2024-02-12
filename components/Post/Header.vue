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
        <TextCaption>
            {{ createdAtFormatted }}
        </TextCaption>
        <div class="my-4">
            <TextHeading tag="h1" variant="dark">{{ post.title }}</TextHeading>
            <TextSubtitle>{{ post.description }}</TextSubtitle>
        </div>
        <div class="flex gap-2">
            <BaseBadge v-for="tag in post?.tags" variant="red" rounded>{{ tag }}</BaseBadge>
        </div>
    </div>
</template>
