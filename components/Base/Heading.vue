<script lang="ts" setup>
import { useSlots } from 'vue'

const slots = useSlots()

interface Props {
    title: string
    description: string
}

const props = defineProps<Props>()
</script>

<template>
    <div :class="['BaseHeading', { 'justify-between': slots.actions }]">
        <div>
            <h2 class="font-black text-neutral-800 text-3xl mb-2">{{ title }}</h2>
            <p class="font-normal text-neutral-400">{{ description }}</p>
        </div>

        <slot name="actions"></slot>
    </div>
</template>

<style lang="postcss">
.BaseHeading {
    @apply flex items-center mb-8;
}
</style>
