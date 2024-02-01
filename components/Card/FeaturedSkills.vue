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
        class="transition ease-in-out duration-300 rounded-lg border border-stone-700 bg-stone-800 p-4 flex flex-row gap-4 ring-0 cursor-pointer hover:ring-red-500/50 hover:border-red-500/50 hover:ring-2 hover:scale-105"
    >
        <ClientOnly>
            <font-awesome-icon class="text-red-600 text-2xl" :icon="icon" />
        </ClientOnly>
        <div>
            <h5 class="text-white text-base">{{ name }}</h5>
            <p class="font-light leading-6 text-stone-400">{{ description }}</p>
        </div>
    </div>
</template>
