<script lang="ts" setup>
const route: any = useRoute()

// [Route | Ref] => Getting current page based on first route load
const perPage = 3
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

// [Nuxt & Promise] => Getting all posts & total rows (Merge)
const { data, refresh } = await useAsyncData(async () => {
    const [allPosts, totalRows] = await Promise.all([queryPosts(), queryTotalRows()])
    return { allPosts, totalRows }
})

watch(
    () => route.query.page,
    (newVal) => {
        currentPage.value = parseInt(newVal)
        refresh()
    }
)

watch(
    filter,
    useDebounce((newVal: any) => {
        debouncedFilter.value = newVal
        if (currentPage.value != 1) currentPage.value = 1
        refresh()
    }, 300)
)

const blogPostsHeading: any = {
    title: 'Mi Blog',
    description: 'Aquí podras ver mis últimas publicaciones, normalmente no subo muchas cosas',
}

useHead({
    title: 'Blog',
})
</script>

<template>
    <div class="Blog container">
        <section class="BlogPosts section-spacing">
            <!-- Heading -->
            <BaseHeading v-bind="blogPostsHeading" />
            <!-- Search -->
            <BaseInput
                v-model="filter"
                type="search"
                name="search"
                placeholder="Buscar"
                icon="fa-solid fa-magnifying-glass"
            />
            <!-- All User Posts -->
            <UserPosts :posts="data?.allPosts || []" />
            <!-- Pagination -->
            <BasePagination
                :current-page="currentPage"
                :total-rows="data?.totalRows || 0"
                :per-page="perPage"
                class="mt-8"
            />
        </section>
    </div>
</template>
