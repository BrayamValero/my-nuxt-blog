<script lang="ts" setup>
interface Props {
    icon: 'string'
    name: 'string'
}

const props = defineProps<Props>()

const getIcon = (name: string) => defineAsyncComponent(() => import(`../../assets/icons/${name}.svg`))
</script>

<template>
    <div
        class="md:justify-start justify-center rounded-lg border border-stone-700 bg-stone-800 p-4 flex items-center gap-4 ring-0 cursor-pointer hover:ring-red-500/50 hover:border-red-500/50 hover:ring-2 hover:scale-105 duration-300"
    >
        <component :is="getIcon(icon)" class="text-red-500 text-2xl shrink-0"></component>
        <span class="text-white md:block hidden">{{ name }}</span>
    </div>
</template>
