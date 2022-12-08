<script lang="ts" setup>

const { path } = useRoute()



const { data: article } = await useAsyncData(path.replace(/\/$/, ''),
    () => queryContent('blog')
        .where({ _path: path })
        .findOne(),
)

useHead({
    title: article.value?.title || '',
})
</script>

<template>
    <div class="BlogSlug">
        <h1>Single Blog View</h1>
        <p>Lorem Ipsum</p>
        <hr class="my-3">
        <ContentRenderer :value="article">
            <template #empty>
                <p>No content found.</p>
            </template>
        </ContentRenderer>
    </div>
</template>

<style lang="scss" scoped>

</style>
