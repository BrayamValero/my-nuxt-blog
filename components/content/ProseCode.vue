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

const { copy, copied } = useClipboard()
</script>

<template>
    <div class="ProseCode">
        <div class="ProseCode-group">
            <span v-if="language" class="ProseCode-language badge badge-primary">
                {{ language }}
            </span>
            <br />
            <span v-if="filename" class="ProseCode-filename">
                {{ filename }}
            </span>
        </div>

        <slot />

        <button class="btn btn-primary" @click="!copied ? copy(code) : null">
            {{ copied ? 'Copiado' : 'Copiar Código' }}
        </button>
    </div>
</template>

<style lang="postcss">
.ProseCode {
    &-group {
        @apply flex flex-wrap gap-3 justify-between items-center;
    }
    &-language {
        @apply font-bold;
    }
    &-filename {
        @apply font-bold text-stone-800 underline;
    }
    & .line {
        @apply block min-h-[1rem];
    }
}
</style>
