<script lang="ts" setup>
interface Props {
    repositories: any
}

defineProps<Props>()
</script>

<template>
    <div class="UserRepositories">
        <h1 class="text-title mb-4">Repositorios en GitHub</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RepositoryCard v-for="repository in repositories" :repository="repository" />
        </div>
    </div>
</template>
