<script lang="ts" setup>
interface Props {
    name: string
    type: 'text' | 'search' | 'number' | 'date'
    placeholder: string
    label?: string
    modelValue?: string | number | object | boolean
    id?: string
    min?: string | number
    max?: string | number
    readonly?: boolean
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
    <div class="BaseInput">
        <label v-if="label" :for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {{ label }}
        </label>
        <input
            :id="id"
            :type="type"
            :placeholder="placeholder"
            :name="name"
            :min="min"
            :max="max"
            :readonly="readonly"
            :value="modelValue"
            :disabled="disabled"
            @input="onInput"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
    </div>
</template>
