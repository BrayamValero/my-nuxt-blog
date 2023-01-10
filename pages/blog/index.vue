<script lang="ts" setup>
const route: any = useRoute()

const perPage = 1
const currentPage = ref(parseInt(route.query.page || 1))

const { data, pending, error, refresh } = await useAsyncData('get-posts', async () =>
    queryContent('blog')
        .limit(perPage)
        .skip(perPage * (currentPage.value - 1))
        .find()
)
const totalRows = await(await queryContent('blog').find()).length

watch(
    () => route.query.page,
    (newVal) => {
        currentPage.value = parseInt(newVal)
        refresh()
    }
)

useHead({
    title: 'Blog',
})
</script>

<template>
    <div class="Blog">
        <h2 class="font-bold mb-3">My Blog Posts</h2>
        <!-- User Posts -->
        <UserPosts :posts="data" />
        <!-- Pagination -->
        <BasePagination :current-page="currentPage" :total-rows="totalRows" :per-page="perPage" />
    </div>
</template>

<style lang="scss" scoped></style>
