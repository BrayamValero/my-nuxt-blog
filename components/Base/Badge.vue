<script lang="ts" setup>
interface Props {
    rounded?: boolean
    variant: 'alternative' | 'dark' | 'light' | 'blue' | 'yellow' | 'red' | 'green'
}

const props = defineProps<Props>()

const getRounded = computed<string | boolean>(() => (props.rounded ? 'rounded-full' : 'rounded'))

const getColor = computed(() => {
    const badgeStyle = 'text-xs py-1 px-2 inline-block leading-none'
    const colors: any = {
        alternative: 'text-gray-900 bg-white',
        dark: 'text-white bg-gray-800',
        light: 'text-gray-900 bg-white',
        blue: 'text-white bg-blue-700',
        yellow: 'text-white bg-yellow-400',
        red: 'text-white bg-red-700',
        green: 'text-white bg-green-700',
        purple: 'text-white bg-purple-700',
    }

    return `${colors[props.variant]} ${badgeStyle}`
})
</script>

<template>
    <span :class="[getColor, getRounded]">
        <slot></slot>
    </span>
</template>
