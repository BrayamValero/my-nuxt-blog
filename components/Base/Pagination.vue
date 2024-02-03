<script lang="ts" setup>
interface Props {
    modelValue: number
    perPage: number
    resultsLength: number
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<Props>(), {
    size: 'base',
})

interface Emits {
    (e: 'update:modelValue', value: string): void
}

const emit = defineEmits<Emits>()

const { path } = useRoute()
const router = useRouter()

const changePage = (page: any) => {
    emit('update:modelValue', page)
    router.push({
        path,
        query: { page },
    })
}

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
</script>

<template>
    <ul class="BasePagination">
        <li class="BasePagination-item">
            <a
                href="javascript:void(0)"
                :class="['BasePagination-link', getSize, modelValue === 1 ? 'disabled' : false]"
                @click="changePage(modelValue - 1)"
            >
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
                Anterior
            </a>
        </li>
        <li class="BasePagination-item">
            <a
                href="javascript:void(0)"
                :class="['BasePagination-link', getSize, resultsLength !== perPage ? 'disabled' : false]"
                @click="changePage(modelValue + 1)"
            >
                Siguiente
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </a>
        </li>
    </ul>
</template>

<style lang="postcss" scoped>
.BasePagination {
    @apply flex flex-row justify-center;
    &-item {
        &:first-child .BasePagination-link {
            @apply ml-0 rounded-l;
        }
        &:last-child .BasePagination-link {
            @apply rounded-r;
        }
    }
    &-link {
        @apply relative flex flex-nowrap items-center gap-x-2 -ml-[1px] text-stone-300 bg-stone-800 border border-stone-700  hover:bg-stone-700;
        &.disabled {
            @apply text-stone-500 pointer-events-none;
        }
    }
}
</style>
