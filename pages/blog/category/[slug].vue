<script lang="ts" setup>
const {
    params: { slug },
} = useRoute()

const { data: posts } = await useAsyncData(`posts-${slug}`, () =>
    queryContent('blog')
        .where({ tags: { $contains: slug } })
        .sort({ date: -1 })
        .find()
)

const blogCategoryHeading: any = {
    caption: slug,
    title: 'Categoria',
    description: 'Acá podrás ver todas las publicaciones que coincidan con la categoría seleccionada',
    position: 'center',
}

useHead({
    title: 'Categoria - ' + slug,
})
</script>

<template>
    <div class="Category container">
        <section class="section-spacing">
            <BaseHeading v-bind="blogCategoryHeading" />
            <UserPosts :posts="posts" />
        </section>
    </div>
</template>
