<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

interface Props {
    code?: string
    language?: string | null
    filename?: string | null
    highlights?: Array<number>
}

const props = withDefaults(defineProps<Props>(), {
    code: '',
    language: null,
    filename: null,
    highlights: () => [],
})

const languageMap: Record<string, { text: string; color: string; background: string }> = {
    vue: {
        text: 'vue',
        background: '#42b883',
        color: 'white',
    },
    js: {
        text: 'js',
        background: '#f7df1e',
        color: 'black',
    },
}
const languageText = computed(() => (props.language ? languageMap[props.language]?.text : null))
const languageBackground = computed(() => (props.language ? languageMap[props.language]?.background : null))
const languageColor = computed(() => (props.language ? languageMap[props.language]?.color : null))

const { copy, copied } = useClipboard()
</script>

<template>
    <div>
        <span
            v-if="languageText"
            :style="{ background: languageBackground, color: languageColor }"
            class="language-text"
        >
            {{ languageText }}
        </span>
        <span v-if="filename" class="filename-text">
            {{ filename }}
        </span>
        <slot />

        <button class="btn btn-primary" @click="!copied ? copy(code) : null">
            {{ copied ? 'Copiado' : 'Copiar Código' }}
        </button>
    </div>
</template>

<style scoped>
.containerx {
    position: relative;
}

.language-text {
    text-transform: uppercase;
    border-bottom-right-radius: 0.25em;
    border-bottom-left-radius: 0.25em;
}
</style>
