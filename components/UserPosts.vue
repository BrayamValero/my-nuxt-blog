<script lang="ts" setup>
interface Props {
    posts: any
}

defineProps<Props>()
</script>

<template>
    <div class="UserPosts">
        <div class="grid grid-cols-3 gap-4">
            <div v-for="{ title, description, date, tags, _path } in posts" class="bg-gray-100 rounded p-5">
                <NuxtLink
                    v-for="tag in tags"
                    :to="'/blog/category/' + tag"
                    class="font-bold inline-block bg-gray-800 rounded text-white mb-2 px-2 py-1"
                >
                    {{ tag }}
                </NuxtLink>
                <h6 class="font-bold">{{ title }}</h6>
                <p>{{ description }}</p>
                <p>{{ date }}</p>
                <NuxtLink :to="_path" class="text-blue-500 font-bold"> Ir al Post </NuxtLink>
            </div>
        </div>
    </div>
</template>
