<script lang="ts" setup>
// const route: any = useRoute()

// // [Route | Ref] => Getting current page based on first route load
// const perPage = 3
// const filter = ref('')
// const debouncedFilter = ref('')
// const currentPage = ref(parseInt(route.query.page || 1))

// // [Nuxt Content] => Querying all posts
// const queryPosts = async () => {
//     const posts = await queryContent('blog')
//         .where({ title: { $contains: debouncedFilter.value } })
//         .limit(perPage)
//         .skip(perPage * (currentPage.value - 1))
//         .find()
//     return posts
// }

// // [Nuxt Content] => Querying total posts
// const queryTotalRows = async () => {
//     let totalRows: Array<any> | number = await queryContent('blog')
//         .where({ title: { $contains: debouncedFilter.value } })
//         .find()
//     return (totalRows = totalRows.length || 0)
// }

// // [Nuxt & Promise] => Getting all posts & total rows (Merge)
// const { data, refresh } = await useAsyncData(async () => {
//     const [allPosts, totalRows] = await Promise.all([queryPosts(), queryTotalRows()])
//     return { allPosts, totalRows }
// })

// watch(
//     () => route.query.page,
//     (newVal) => {
//         currentPage.value = parseInt(newVal)
//         refresh()
//     }
// )

// watch(
//     filter,
//     useDebounce((newVal: any) => {
//         debouncedFilter.value = newVal
//         if (currentPage.value != 1) currentPage.value = 1
//         refresh()
//     }, 300)
// )

useHead({
    title: 'Blog',
})
</script>

<template>
    <div class="Blog">
        <section class="container">
            <h1>Posts</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit provident deleniti nobis
                nesciunt quae laudantium, sit cumque, repudiandae quam ipsa assumenda inventore, eveniet maxime
                blanditiis quidem quas eaque dicta voluptate!
            </p>
        </section>
    </div>
</template>
