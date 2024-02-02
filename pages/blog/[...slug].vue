<script lang="ts" setup>
const { path } = useRoute()
const { page, toc } = useContent()

const [prev, next]: any = await queryContent('blog')
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
        <section class="container my-16">
            <div class="grid grid-cols-12 gap-6">
                <!-- Post: Content -->
                <article class="bg-white border border-stone-300 rounded-lg md:col-span-8 col-span-full">
                    <PostHeader class="border-b border-stone-300 p-7" :post="page" />
                    <div class="prose sm:prose-base prose-sm p-7">
                        <ContentRenderer :value="page">
                            <template #empty>
                                <p>No se ha encontrado nada</p>
                            </template>
                        </ContentRenderer>
                    </div>
                </article>
                <!-- Post: Content -->
                <PostContent :content="toc.links" class="hidden md:block col-span-4 self-start" />
                <PostSurround :prev="prev" :next="next" />
            </div>
        </section>
    </div>
</template>
