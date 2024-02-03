<script setup lang="ts">
interface Props {
    id?: string
    to?: string
    href?: string
    rounded?: boolean
    disabled?: boolean
    autofocus?: boolean
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
    type?: 'button' | 'submit' | 'reset'
    variant: 'alternative' | 'dark' | 'light' | 'blue' | 'yellow' | 'red' | 'green'
}

const props = withDefaults(defineProps<Props>(), {
    type: 'button',
    size: 'base',
})

const getTag = computed<string>(() => (props.href ? 'a' : 'button'))

const getRounded = computed<string | boolean>(() => (props.rounded ? 'rounded-full' : 'rounded-lg'))

const getSize = computed<string>(() => {
    const sizes = {
        xs: 'px-3 py-2 text-xs',
        sm: 'px-3 py-2 text-sm',
        base: 'px-5 py-2.5 text-base',
        lg: 'px-5 py-3 text-lg',
        xl: 'px-6 py-3.5 text-xl',
    }

    return sizes[props.size]
})

const getColor = computed(() => {
    const btnStyle = 'focus:ring-2 focus:outline-none font-medium duration-300'
    const colors: any = {
        alternative:
            'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 ',
        dark: 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300',
        light: 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200',
        blue: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300',
        yellow: 'text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300',
        red: 'text-white bg-red-700 hover:bg-red-800 focus:ring-red-300',
        green: 'text-white bg-green-700 hover:bg-green-800 focus:ring-green-300',
        purple: 'text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300',
    }

    return `${colors[props.variant]} ${btnStyle}`
})
</script>
<template>
    <NuxtLink
        v-if="to"
        :id="id"
        :to="to"
        :type="type"
        :class="[getColor, getSize, getRounded]"
        :disabled="disabled"
        :autofocus="autofocus"
    >
        <slot></slot>
    </NuxtLink>
    <component
        v-else
        :is="getTag"
        :id="id"
        :href="href"
        :type="type"
        :class="[getColor, getSize, getRounded]"
        :disabled="disabled"
        :autofocus="autofocus"
    >
        <slot></slot>
    </component>
</template>
