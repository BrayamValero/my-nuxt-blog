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
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
    fullwidth?: boolean
}

interface Emits {
    (e: 'update:modelValue', value: string): void
}

const props = withDefaults(defineProps<Props>(), {
    size: 'base',
})

const emit = defineEmits<Emits>()

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

const onInput = (event: any) => emit('update:modelValue', event.target.value)
</script>

<template>
    <div :class="[props.fullwidth ? 'w-full' : '']">
        <label v-if="label" :for="name" class="block mb-2 text-sm font-medium text-gray-200">
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
            :class="[getSize, props.fullwidth ? 'w-full' : '']"
            class="bg-stone-800 border border-stone-700 placeholder:text-stone-300 text-stone-300 rounded-lg outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 disabled:placeholder:text-stone-500 duration-300"
        />
    </div>
</template>
