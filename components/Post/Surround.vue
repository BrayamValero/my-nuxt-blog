<script lang="ts" setup>
interface Props {
    prev: { _path: string; title: string }
    next: { _path: string; title: string }
}

defineProps<Props>()
</script>

<template>
    <div class="col-span-full sm:col-span-8 flex justify-between gap-4">
        <NuxtLink class="btn btn-primary" v-if="prev" :to="prev._path">{{ prev.title }}</NuxtLink>
        <NuxtLink class="btn btn-primary" v-if="next" :to="next._path">{{ next.title }}</NuxtLink>
    </div>
</template>
