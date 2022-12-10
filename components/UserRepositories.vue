<script lang="ts" setup>
interface Props {
    repositories: any
}

defineProps<Props>()
</script>

<template>
    <div class="UserRepositories">
        <div class="grid grid-cols-3 gap-4">
            <RepositoryCard v-for="repository in repositories" :repository="repository" />
        </div>
    </div>
</template>
