<script lang="ts" setup>
interface Props {
    modelValue?: string | number | object | boolean
    icon?: string
    type: 'text' | 'search' | 'number' | 'date'
    placeholder: string
    name: string
    min?: string | number
    max?: string | number
    disabled?: boolean
}

interface Emits {
    (e: 'update:modelValue', value: string): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const onInput = (event: any) => emit('update:modelValue', event.target.value)
</script>

<template>
    <div class="form-control">
        <div v-if="icon" class="form-control-icon">
            <ClientOnly>
                <font-awesome-icon :icon="icon" />
            </ClientOnly>
        </div>
        <input
            :type="type"
            :placeholder="placeholder"
            :name="name"
            :min="min"
            :max="max"
            :value="modelValue"
            :disabled="disabled"
            @input="onInput"
            class="form-control-input"
        />
    </div>
</template>
