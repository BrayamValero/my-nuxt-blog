<script lang="ts" setup>
interface Props {
    icon: 'string'
    name: 'string'
    description: 'string'
}

const props = defineProps<Props>()
</script>

<template>
    <div
        class="duration-300 rounded-lg border border-stone-700 bg-stone-800 p-4 flex flex-row gap-4 ring-0 cursor-pointer hover:ring-red-500/50 hover:border-red-500/50 hover:ring-2 hover:scale-105"
    >
        <font-awesome-icon class="text-red-600 text-2xl" :icon="icon" />
        <div>
            <h5 class="text-white">{{ name }}</h5>
            <p class="font-light leading-6 sm:text-base text-sm text-stone-400">{{ description }}</p>
        </div>
    </div>
</template>
