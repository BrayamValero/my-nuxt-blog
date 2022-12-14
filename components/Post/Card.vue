<script lang="ts" setup>
interface Props {
    post: any
}

const props = defineProps<Props>()

const navigateToPost = () => {
    navigateTo(props.post._path)
}

const humanRedableDate = computed(() => {
    return new Date(props.post.date).toDateString()
})
</script>

<template>
    <div class="BlogCard">
        <img
            class="w-full h-36 object-cover cursor-pointer rounded-md shadow"
            src="https://i.imgur.com/AD3MbBi.jpeg"
            alt="image"
            @click="navigateToPost"
        />
        <div class="flex-1 my-4">
            <div class="flex flex-wrap gap-2 mb-1">
                <CategoryBadge v-for="tag in post.tags" :category="tag" />
            </div>
            <h2 class="text-title dark:text-white line-clamp-1">
                <NuxtLink :to="post._path" class="block">
                    {{ post.title }}
                </NuxtLink>
            </h2>
            <p class="text-description line-clamp-1">{{ post.description }}</p>
            <p class="text-caption mt-1">Publicado el {{ humanRedableDate }}</p>
        </div>
        <!-- Link -->
        <!-- <NuxtLink :to="post._path" class="btn btn-primary"> Ver publicación </NuxtLink> -->
    </div>
</template>

<style lang="postcss" scoped>
.BlogCard {
    @apply flex flex-col;
}
</style>
