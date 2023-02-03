<script lang="ts" setup>
type Theme = 'light' | 'dark'
const colorMode = useColorMode()

const setColorTheme = () => {
    if (colorMode.value === 'dark') {
        colorMode.value = 'light'
    } else {
        colorMode.value = 'dark'
    }
}

const getColorIcon = computed<string>(() => (colorMode.value === 'dark' ? 'fa-sun' : 'fa-moon'))
</script>

<template>
    <button @click="setColorTheme" type="button" role="button" :aria-label="colorMode.value">
        <ClientOnly>
            <font-awesome-icon :icon="['fa-solid', getColorIcon]" />
        </ClientOnly>
        <span>Cambiar Tema</span>
    </button>
</template>
