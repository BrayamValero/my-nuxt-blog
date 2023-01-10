<script lang="ts" setup>
const route: any = useRoute()

const perPage = 1
const currentPage = ref(parseInt(route.query.page || 1))
const totalRows = ref(await(await queryContent('blog').find()).length)

const getPosts = async () => {
    const [totalRows, allPosts] = await Promise.all([
        (await queryContent('blog').find()).length,
        queryContent('blog')
            .limit(perPage)
            .skip(perPage * (currentPage.value - 1))
            .find(),
    ])

    return {
        totalRows,
        allPosts,
    }
}

const { data, pending, error, refresh } = await useAsyncData('get-posts', getPosts)

watch(
    () => route.query.page,
    (newVal) => {
        currentPage.value = parseInt(newVal)
        refresh()
    }
)

const posts = ref([])

const filter = ref('')
watch(filter, async (newVal) => {
    posts.value = await queryContent('blog')
        .where({ title: { $contains: newVal } })
        .limit(perPage)
        .skip(perPage * (currentPage.value - 1))
        .find()
})

useHead({
    title: 'Blog',
})
</script>

<template>
    <div class="Blog">
        <h2 class="font-bold mb-3">My Blog Posts</h2>
        <!-- Search -->
        <!-- <input type="search" v-model="filter" /> -->
        <pre>{{ data }}</pre>
        <!-- User Posts -->
        <!-- <UserPosts :posts="posts" /> -->
        <!-- Pagination -->
        <!-- <BasePagination :current-page="currentPage" :total-rows="totalRows" :per-page="perPage" /> -->
    </div>
</template>

<style lang="scss" scoped></style>
