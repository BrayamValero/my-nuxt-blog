<script lang="ts" setup>
const { path } = useRoute()
const { page, toc } = useContent()

const [prev, next] = await queryContent('blog')
    .where({ published: { $ne: false }, featured: { $ne: true } })
    .only(['_path', 'title'])
    .findSurround(path)

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

useHead({
    title: page.title || 'Post',
})
</script>

<template>
    <div class="BlogPost">
        <div class="grid grid-cols-12 gap-6">
            <!-- Post: Content -->
            <article class="card col-span-full sm:col-span-8">
                <div class="card-header p-7">
                    <PostHeader :post="page" />
                </div>
                <div class="card-body prose p-7">
                    <ContentRenderer :value="page">
                        <template #empty>
                            <p>No content found.</p>
                        </template>
                    </ContentRenderer>
                </div>
            </article>
            <!-- Post: Content -->
            <PostContent :content="toc.links" class="col-span-full sm:col-span-4 self-start" />
            <!-- Post: Prev & Next Links -->
            <div class="col-span-full sm:col-span-8 flex justify-between gap-4">
                <NuxtLink class="btn btn-primary" v-if="prev" :to="prev._path">{{ prev.title }}</NuxtLink>
                <NuxtLink class="btn btn-primary" v-if="next" :to="next._path">{{ next.title }}</NuxtLink>
            </div>
        </div>
    </div>
</template>
