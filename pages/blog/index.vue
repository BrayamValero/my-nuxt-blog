<script lang="ts" setup>
// [Ref] => Getting Pagination
const pagination: any = ref({
    search: '',
    perPage: 2,
    currentPage: 1,
})

// [Nuxt Content] => Querying all posts
const queryPosts = async () => {
    const skip = pagination.value.perPage * (pagination.value.currentPage - 1)
    const posts = await queryContent('blog')
        .where({ title: { $contains: pagination.value.search } })
        .limit(pagination.value.perPage)
        .skip(skip)
        .find()
    return posts
}

// [Nuxt & Promise] => Getting all posts & total rows (Merge)
const { data: posts, refresh: refreshPosts }: any = await useAsyncData('get-posts', async () => await queryPosts(), {
    watch: [pagination.value],
})

// Watch => Getting Search Results
watch(
    () => pagination.value.search,
    useDebounce(() => {
        pagination.value.currentPage = 1
        refreshPosts()
    }, 500)
)

useHead({
    title: 'Blog',
})
</script>

<template>
    <div class="Blog">
        <!-- Section -->
        <section class="container my-16">
            <div class="flex flex-col items-center text-center">
                <h1 class="text-white text-2xl font-bold mb-2">Blog</h1>
                <p class="text-stone-400 font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, ipsum.
                </p>
                <BaseInput
                    v-model="pagination.search"
                    type="text"
                    name="search"
                    placeholder="Buscar"
                    class="w-80 mt-8"
                />
            </div>
            <div :class="['my-16', posts.length < 1 ? 'flex justify-center text-center' : false]">
                <template v-if="posts.length >= 1">
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
                        <CardPost v-for="post in posts" v-bind="post" />
                    </div>
                </template>
                <template v-else>
                    <div class="w-80 bg-stone-800 rounded-lg border border-stone-700 p-6">
                        <h1 class="text-white text-2xl font-bold mb-2">Whoops!</h1>
                        <p class="text-stone-400 font-light">Sin resultados</p>
                    </div>
                </template>
            </div>

            <!-- Pagination -->
            <BasePagination
                v-model="pagination.currentPage"
                :per-page="pagination.perPage"
                :results-length="posts.length"
            />
        </section>
    </div>
</template>
