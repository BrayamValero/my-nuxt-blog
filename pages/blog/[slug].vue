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
    <div class="card">
        <div class="card-header p-7">
            <PostHeader :post="post" />
        </div>
        <div class="card-body p-7">
            <ContentRenderer :value="post">
                <template #empty>
                    <p>No content found.</p>
                </template>
            </ContentRenderer>
        </div>
    </div>
</template>
