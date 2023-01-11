<script lang="ts" setup>
interface Props {
    currentPage: number
    totalRows: number
    perPage?: number
    limit?: number
    showFirstLast?: boolean
    showPrevNext?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    perPage: 5,
    limit: 3,
    showFirstLast: true,
    showPrevNext: true,
})

const getLastPage = computed(() => Math.ceil(props.totalRows / props.perPage))
const getPrevPage = computed(() => (props.currentPage > 1 ? props.currentPage - 1 : props.currentPage))
const getNextPage = computed(() => (props.currentPage < getLastPage.value ? props.currentPage + 1 : props.currentPage))
const getTotalPagination = computed<number>(() => Math.ceil(props.totalRows / props.perPage))

const getLinks = computed<Array<number | string>>(() => {
    const limit: number = props.limit
    const total: number = getTotalPagination.value
    const current: number = props.currentPage
    const numShown: number = Math.min(limit, total)
    let first: number = current - Math.floor(numShown / 2)
    first = Math.max(first, 1)
    first = Math.min(first, total - numShown + 1)
    const result = [...Array(numShown)].map((k, i) => i + first)
    if (limit < total) {
        const first = result[0]
        const last = result[result.length - 1]
        if (first === 1) {
            return [...result, '...']
        } else if (last === total) {
            return ['...', ...result]
        }
        return ['...', ...result, '...']
    }
    return result
})
</script>

<template>
    <ul class="BasePagination">
        <li class="BasePagination-item">
            <NuxtLink
                v-if="showFirstLast"
                class="BasePagination-link"
                :to="{
                    path: $route.path,
                    query: { page: 1 },
                }"
            >
                First
            </NuxtLink>
        </li>
        <li class="BasePagination-item">
            <NuxtLink
                v-if="showPrevNext"
                class="BasePagination-link"
                :to="{
                    path: $route.path,
                    query: { page: getPrevPage },
                }"
            >
                Prev
            </NuxtLink>
        </li>
        <li v-for="index in getLinks" :key="index" class="BasePagination-item">
            <NuxtLink
                class="BasePagination-link"
                :to="{
                    path: $route.path,
                    query: { page: index },
                }"
                :class="{ disabled: index === '...', active: index === currentPage }"
            >
                {{ index }}
            </NuxtLink>
        </li>
        <li class="BasePagination-item">
            <NuxtLink
                v-if="showPrevNext"
                class="BasePagination-link"
                :to="{
                    path: $route.path,
                    query: { page: getNextPage },
                }"
            >
                Next
            </NuxtLink>
        </li>
        <li class="BasePagination-item">
            <NuxtLink
                v-if="showFirstLast"
                class="BasePagination-link"
                :to="{
                    path: $route.path,
                    query: { page: getLastPage },
                }"
            >
                Last
            </NuxtLink>
        </li>
    </ul>
</template>

<style lang="postcss" scoped>
.BasePagination {
    @apply flex flex-row;
    &-item {
        &:first-child .BasePagination-link {
            margin-left: 0;
            border-top-left-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
        }
        &:last-child .BasePagination-link {
            border-top-right-radius: 0.25rem;
            border-bottom-right-radius: 0.25rem;
        }
    }
    &-link {
        position: relative;
        margin-left: -1px;
        @apply text-[.85rem] text-gray-500 bg-white font-light border border-gray-300 py-2 px-3;
        &:hover {
            @apply bg-gray-400;
        }
        &.disabled {
            @apply text-gray-400 pointer-events-none;
        }
        &.active {
            z-index: 1;
            @apply bg-gray-800 text-white;
        }
    }
}
</style>
