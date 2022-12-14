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
    <div class="RepositoryCard card cursor-pointer" @click="navigateToRepository">
        <div class="card-header flex-between-center">
            <p class="text-title">{{ repository.name }}</p>
            <span class="badge bg-blue-400 text-white">{{ isPrivate }}</span>
        </div>
        <div class="card-body">
            <p class="text-description">{{ repository.description || 'Repositorio de GitHub' }}</p>
        </div>
        <div class="card-footer flex-between-center">
            <p class="text-small">{{ repository.language || 'Sin Lenguajes' }}</p>
            <p class="text-small">{{ repository.license ? repository.license.name : 'Sin licencia' }}</p>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.RepositoryCard {
}
</style>
