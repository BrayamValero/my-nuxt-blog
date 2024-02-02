<script lang="ts" setup>
interface Props {
    modelValue: number
    perPage: number
    resultsLength: number
}

const props = defineProps<Props>()

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
</script>

<template>
    <ul class="BasePagination">
        <li class="BasePagination-item">
            <a
                href="javascript:void(0)"
                :class="['BasePagination-link', modelValue === 1 ? 'disabled' : false]"
                @click="changePage(modelValue - 1)"
            >
                Anterior
            </a>
        </li>
        <li class="BasePagination-item">
            <a
                href="javascript:void(0)"
                :class="['BasePagination-link', resultsLength !== perPage ? 'disabled' : false]"
                @click="changePage(modelValue + 1)"
            >
                Siguiente
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
        @apply relative -ml-[1px] text-base text-white bg-stone-800 border border-stone-700 px-5 py-2.5 hover:bg-stone-700;
        &.disabled {
            @apply text-stone-500 pointer-events-none;
        }
    }
}
</style>
