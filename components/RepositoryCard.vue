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
</script>

<template>
    <div class="RepositoryCard" @click="navigateToRepository">
        <p class="RepositoryCard-name">{{ repository.name }}</p>
        <p class="RepositoryCard-description">{{ repository.description || 'No Description Available' }}</p>
        <p class="RepositoryCard-language">{{ repository.language || 'No Language Available' }}</p>
        <p class="RepositoryCard-license">{{ repository.license ? repository.license.name : 'Sin licencia' }}</p>
        <p class="RepositoryCard-updated">{{ humanRedableDate }}</p>
        <p class="RepositoryCard-private">Private: {{ repository.isPrivate ? 'true' : 'false' }}</p>
    </div>
</template>

<style lang="scss" scoped>
.RepositoryCard {
    @apply bg-white flex flex-col rounded-md shadow-lg shadow-gray-200/50 p-3 cursor-pointer;
    &-name {
        font-size: 18px;
        @apply font-bold text-gray-800;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    &-description {
        @apply text-gray-500;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    &-footer {
        font-size: 12px;
        @apply text-gray-500 mt-auto border-t-[1px] border-gray-100 py-2 px-3;
    }
    &-author::after {
        content: '·';
        margin: 0 0.25rem;
    }
}
</style>
