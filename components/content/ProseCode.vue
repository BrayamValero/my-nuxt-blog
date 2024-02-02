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
        <div class="flex flex-wrap justify-between items-center gap-3">
            <BaseBadge v-if="language" class="font-bold" variant="red" rounded>{{ language }}</BaseBadge>
            <br />
            <span v-if="filename" class="font-bold text-stone-800 underline">
                {{ filename }}
            </span>
        </div>

        <slot />

        <BaseButton variant="red" size="sm" @click="!copied ? copy(code) : null">
            {{ copied ? 'Copiado' : 'Copiar Código' }}
        </BaseButton>
    </div>
</template>

<style lang="postcss">
.ProseCode {
    & .line {
        @apply block min-h-[1rem];
    }
}
</style>
