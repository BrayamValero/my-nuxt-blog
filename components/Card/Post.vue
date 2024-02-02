<script lang="ts" setup>
interface Props {
    provider: any
    _path: any
    created_at: any
    image: any
    title: any
    tags: any
    description: any
}

const props = defineProps<Props>()

const navigateToPost = () => navigateTo(props._path)
const createdAtFormatted = computed(() => `Publicado el ${useFormattedDate(props.created_at)}`)
</script>

<template>
    <div class="flex flex-col rounded-lg shadow-xl duration-300 hover:ring-red-500/50 hover:ring-4 hover:scale-105">
        <div class="relative">
            <NuxtImg
                :provider="provider"
                :src="image"
                :alt="'img_' + title"
                @click="navigateToPost"
                class="rounded-t-lg w-full h-48 object-cover cursor-pointer shadow"
            />
            <div class="flex flex-wrap gap-2 absolute bottom-4 left-4">
                <BaseBadge v-for="tag in tags" variant="red" class="cursor-pointer" rounded>
                    {{ tag }}
                </BaseBadge>
            </div>
        </div>
        <div class="rounded-b-lg flex-1 p-6 bg-white">
            <h2 class="font-bold text-stone-800 sm:text-xl text-lg inline-flex">
                <NuxtLink :to="_path" class="line-clamp-2">
                    {{ title }}
                </NuxtLink>
            </h2>
            <p class="font-light text-stone-500 md:text-base text-sm md:leading-7 leading:6 line-clamp-2">
                {{ description }}
            </p>
            <TextCaption class="mt-2">
                {{ createdAtFormatted }}
            </TextCaption>
        </div>
    </div>
</template>
