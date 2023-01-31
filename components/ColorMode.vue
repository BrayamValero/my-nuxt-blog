<script lang="ts" setup>
type Theme = 'light' | 'dark'
const colorMode = useColorMode()

const setColorTheme = () => {
    if (colorMode.preference === 'dark') {
        colorMode.preference = 'light'
    } else {
        colorMode.preference = 'dark'
    }
}

const getColorIcon = computed<string>(() => (colorMode.preference === 'dark' ? 'fa-sun' : 'fa-moon'))
</script>

<template>
    <button @click="setColorTheme" type="button" role="button" :aria-label="colorMode.preference">
        <div>
            <font-awesome-icon :icon="['fa-solid', getColorIcon]" />
        </div>
        <span>Cambiar Tema</span>
    </button>
</template>
