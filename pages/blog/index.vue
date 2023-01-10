<script lang="ts" setup>
const route: any = useRoute()

// [Route | Ref] => Getting current page based on first route load
const perPage = 1
const filter = ref('')
const debouncedFilter = ref('')
const currentPage = ref(parseInt(route.query.page || 1))

// [Nuxt Content] => Querying all posts
const queryPosts = async () => {
    const posts = await queryContent('blog')
        .where({ title: { $contains: debouncedFilter.value } })
        .limit(perPage)
        .skip(perPage * (currentPage.value - 1))
        .find()
    return posts
}

// [Nuxt Content] => Querying total posts
const queryTotalRows = async () => {
    let totalRows: Array<any> | number = await queryContent('blog')
        .where({ title: { $contains: debouncedFilter.value } })
        .find()
    return (totalRows = totalRows.length || 0)
}

// [Method] => Merging data (allPost with totalRows)
const getPosts = async () => {
    const [allPosts, totalRows] = await Promise.all([queryPosts(), queryTotalRows()])
    return {
        allPosts,
        totalRows,
    }
}

// [Nuxt | useAsyncData] => Getting Posts with
const { data, pending, refresh: refreshPosts }: any = await useLazyAsyncData('posts', getPosts)

watch(
    () => route.query.page,
    (newVal) => {
        currentPage.value = parseInt(newVal)
        refreshPosts()
    }
)

watch(
    filter,
    useDebounce((newVal: any) => {
        debouncedFilter.value = newVal
        if (currentPage.value != 1) currentPage.value = 1
        refreshPosts()
    }, 300)
)

useHead({
    title: 'Blog',
})
</script>

<template>
    <div class="Blog">
        <h2 class="font-bold mb-3">My Blog Posts</h2>
        <!-- Search -->
        <input type="search" v-model="filter" />
        <!-- User Posts -->
        <UserPosts :posts="data?.allPosts" />
        <!-- Pagination -->
        <BasePagination :current-page="currentPage" :total-rows="data?.totalRows" :per-page="perPage" />
    </div>
</template>

<style lang="scss" scoped></style>
