<script lang="ts" setup>
interface Props {
    repository: any
}

const props = defineProps<Props>()

const navigateToRepository = () => {
    window.open(props.repository.html_url, '_blank')
}

const humanRedableDate = computed(() => {
    return new Date(props.repository.updated_at).toDateString()
})

const isPrivate = computed(() => {
    return props.repository.isPrivate ? 'Privado' : 'Público'
})
</script>

<template>
    <div class="RepositoryCard" @click="navigateToRepository">
        <div class="RepositoryCard-header">
            <p class="RepositoryCard-name">{{ repository.name }}</p>
            <span class="RepositoryCard-private">{{ isPrivate }}</span>
        </div>
        <div class="RepositoryCard-body">
            <p class="RepositoryCard-description">{{ repository.description || 'No Description Available' }}</p>
        </div>
        <div class="RepositoryCard-footer">
            <p class="RepositoryCard-language">{{ repository.language || 'Sin Lenguajes' }}</p>
            <p class="RepositoryCard-license">{{ repository.license ? repository.license.name : 'Sin licencia' }}</p>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.RepositoryCard {
    @apply bg-white flex flex-col rounded-md shadow-lg shadow-gray-200/50 cursor-pointer;
    &-header {
        @apply flex justify-between items-center py-2 px-3;
    }
    &-name {
        font-size: 1rem;
        @apply font-bold text-gray-800;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    &-private {
        font-size: 0.75rem;
        @apply inline-block border rounded px-2 py-1 text-gray-600;
    }
    &-body {
        @apply px-2 py-1;
    }
    &-description {
        font-size: 0.875rem;
        @apply text-gray-500;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    &-footer {
        font-size: 0.75rem;
        @apply flex justify-between items-center text-gray-500 mt-auto border-t-[1px] border-gray-100 py-2 px-3;
    }
    &-author::after {
        content: '·';
        margin: 0 0.25rem;
    }
}
</style>
