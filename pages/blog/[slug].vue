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
        <PostHeader :post="post" />
        <!-- <pre>{{ post }}</pre> -->
        <ContentRenderer :value="post">
            <template #empty>
                <p>No content found.</p>
            </template>
        </ContentRenderer>
    </div>
</template>

<style lang="scss" scoped></style>
