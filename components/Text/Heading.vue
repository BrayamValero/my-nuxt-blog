<script lang="ts" setup>
interface Props {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    variant?: 'light' | 'dark'
}

const props = withDefaults(defineProps<Props>(), {
    tag: 'h2',
    variant: 'light',
})

const getVariant = computed<string>(() => {
    const variant = {
        light: 'text-white',
        dark: 'text-stone-800',
    }

    return variant[props.variant]
})
</script>

<template>
    <component :is="tag" :class="[getVariant]" class="md:text-2xl text-xl font-bold">
        <slot></slot>
    </component>
</template>
