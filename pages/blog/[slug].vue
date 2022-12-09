<script lang="ts" setup>
const { path } = useRoute()

const { data: post } = await useAsyncData(path.replace(/\/$/, ''), () =>
    queryContent('blog').where({ _path: path }).findOne()
)

useHead({
    title: post.value?.title || '',
})
</script>

<template>
    <div class="BlogSlug">
        <!-- Single Blog => Header simulator -->
        <div class="bg-gray-100 rounded p-5 mb-10">
            <NuxtLink
                v-for="tag in post.tags"
                :to="'/blog/categories/' + tag"
                class="font-bold inline-block bg-gray-800 rounded text-white mb-2 px-2 py-1"
            >
                {{ tag }}
            </NuxtLink>
            <h6 class="font-bold">{{ post.title }}</h6>
            <p>{{ post.description }}</p>
            <p>{{ post.date }}</p>
            <NuxtLink :to="post._path" class="text-blue-500 font-bold"> Ir al Post </NuxtLink>
        </div>
        <ContentRenderer :value="post">
            <template #empty>
                <p>No content found.</p>
            </template>
        </ContentRenderer>
    </div>
</template>

<style lang="scss" scoped></style>
