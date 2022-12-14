<script lang="ts" setup>
interface Props {
    post: any
}

const props = defineProps<Props>()

const humanRedableDate = computed(() => {
    return new Date(props.post.date).toDateString()
})
</script>

<template>
    <div class="PostHeader">
        <div class="bg-gray-100 rounded p-5 mb-10">
            <pre>{{ post }}</pre>
            <NuxtLink
                v-for="tag in post?.tags"
                :to="'/blog/category/' + tag"
                class="font-bold inline-block bg-gray-800 rounded text-white mb-2 px-2 py-1"
            >
                {{ tag }}
            </NuxtLink>
            <h6 class="font-bold">{{ post.title }}</h6>

            <p>{{ post.author }} - {{ post.date }} - {{ post.updated_at }}</p>
            <NuxtLink :to="post._path" class="text-blue-500 font-bold"> Ir al Post </NuxtLink>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.BlogCard {
}
</style>
