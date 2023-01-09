<script lang="ts" setup>
const { path } = useRoute()

const { data: post } = await useAsyncData(path.replace(/\/$/, ''), () =>
    queryContent('blog').where({ _path: path }).findOne()
)

useHead({
    title: post.value?.title || '',
})

const flattenLinks = (links: Array<any>) => {
    const _links = links
        .map((link) => {
            let _link = [link]
            if (link.children) {
                const flattened = flattenLinks(link.children)
                _link = [link, ...flattened]
            }
            return _link
        })
        .flat(1)
    return _links
}
</script>

<template>
    <div class="BlogPost">
        <div class="grid grid-cols-12 gap-6">
            <!-- Blog Post -->
            <article class="card col-span-full sm:col-span-8">
                <div class="card-header p-7">
                    <PostHeader :post="post" />
                </div>
                <div class="card-body prose p-7">
                    <ContentRenderer :value="post">
                        <template #empty>
                            <p>No content found.</p>
                        </template>
                    </ContentRenderer>
                </div>
            </article>
            <!-- Post Content -->
            <PostContent :content="post?.body.toc.links" class="col-span-full sm:col-span-4 self-start" />
        </div>
    </div>
</template>
