<script lang="ts" setup>
interface Props {
    post: any
}

const props = defineProps<Props>()

const navigateToPost = () => navigateTo(props.post._path)
const createdAtFormatted = computed(() => `Publicado el ${useFormattedDate(props.post.created_at)}`)
</script>

<template>
    <div
        class="flex flex-col bg-white rounded-lg shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300"
    >
        <div class="relative">
            <NuxtImg
                :provider="post.provider"
                :src="post.image"
                :alt="'img_' + post.title"
                @click="navigateToPost"
                class="rounded-t-lg w-full h-48 object-cover cursor-pointer shadow"
            />
            <div class="flex flex-wrap gap-2 absolute bottom-4 left-4">
                <CategoryBadge v-for="tag in post.tags" :category="tag" />
            </div>
        </div>
        <div class="rounded-b-lg flex-1 p-6">
            <h2 class="font-black text-stone-800 text-xl mb-1 inline-flex">
                <NuxtLink :to="post._path" class="line-clamp-2">
                    {{ post.title }}
                </NuxtLink>
            </h2>
            <p class="font-light text-stone-400 text-sm leading-7 mb-2 line-clamp-2">{{ post.description }}</p>
            <p class="text-red-600 text-xs">{{ createdAtFormatted }}</p>
        </div>
    </div>
</template>
