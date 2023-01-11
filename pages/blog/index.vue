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

// [Nuxt | Promise] => Merging all posts with total rows
const getPosts = async () => {
    const [allPosts, totalRows] = await Promise.all([queryPosts(), queryTotalRows()])
    return { allPosts, totalRows }
}

// [Nuxt | useAsyncData] => Getting all posts & total rows
const { data, refresh: refreshPosts } = await useAsyncData('getPosts', getPosts)

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
        <input type="search" v-model="filter" />
        <UserPosts :posts="data?.allPosts || []" />
        <BasePagination :current-page="currentPage" :total-rows="data?.totalRows || 0" :per-page="perPage" />
    </div>
</template>
