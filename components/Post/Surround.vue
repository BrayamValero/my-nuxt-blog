<script lang="ts" setup>
interface Props {
    prev: { _path: string; title: string } | null
    next: { _path: string; title: string } | null
}

defineProps<Props>()
</script>

<template>
    <div class="col-span-full sm:col-span-8 flex justify-between gap-4">
        <BaseButton variant="light" size="sm" v-if="prev" :to="prev._path">
            <font-awesome-icon icon="fa-solid fa-arrow-left" class="me-1" />
            {{ prev.title }}
        </BaseButton>
        <BaseButton variant="light" size="sm" v-if="next" :to="next._path">
            {{ next.title }}
            <font-awesome-icon icon="fa-solid fa-arrow-right" class="ms-1" />
        </BaseButton>
    </div>
</template>
