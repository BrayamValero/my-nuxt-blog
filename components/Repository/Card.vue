<script lang="ts" setup>
interface Props {
    repository: any
}

const props = defineProps<Props>()

const navigateToRepository = () => {
    window.open(props.repository.html_url, '_blank')
}

const getLanguageColor = computed(() => {
    const color: any = {
        HTML: 'bg-orange-500',
        JavaScript: 'bg-yellow-500',
        PHP: 'bg-red-500',
        Vue: 'bg-green-500',
        React: 'bg-blue-500',
        default: 'bg-gray-500',
    }
    return color[props.repository.language] || color['default']
})

const isPrivate = computed(() => {
    return props.repository.isPrivate ? 'Privado' : 'Público'
})
</script>

<template>
    <div class="RepositoryCard card cursor-pointer" @click="navigateToRepository">
        <div class="card-header flex-between-center">
            <p class="text-title">{{ repository.name }}</p>
            <span class="badge badge-primary">{{ isPrivate }}</span>
        </div>
        <div class="card-body">
            <p class="text-description">{{ repository.description || 'Repositorio de GitHub' }}</p>
        </div>
        <div class="card-footer flex-between-center">
            <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full mr-1" :class="[getLanguageColor]"></div>
                <p class="text-small text-blue-400">
                    {{ repository.language || 'Sin Lenguajes' }}
                </p>
            </div>
            <p class="text-small">{{ repository.license ? repository.license.name : 'Sin licencia' }}</p>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.RepositoryCard {
}
</style>
