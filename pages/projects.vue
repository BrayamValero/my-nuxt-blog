<script lang="ts" setup>
// [Nuxt - LazyAsyncData] => Querying Github Repositories
const { pending, data: repositories } = useLazyAsyncData('getUserRepositories', () =>
    $fetch('https://api.github.com/users/brayamvalero/repos')
)

useHead({
    title: 'Projects',
})
</script>

<template>
    <div class="Projects">
        <UserRepositories :repositories="repositories" class="mb-10" />
        <UserProjects />
    </div>
</template>
