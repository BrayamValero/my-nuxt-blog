<script lang="ts" setup>
interface Props {
    title: string
    description: string
    url: string
}

const props = defineProps<Props>()
</script>

<template>
    <!-- transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 -->
    <div
        class="transition ease-in-out bg-white hover:-translate-y-1 hover:scale-105 duration-300 h-full flex flex-col justify-between p-5 rounded-lg drop-shadow-md cursor-pointer"
    >
        <h1 class="font-bold text-neutral-800">{{ title }}</h1>
        <p class="font-normal text-neutral-600 text-sm leading-7 mb-5">{{ description }}</p>
        <p class="font-normal text-neutral-400 text-sm">
            Ver Mas
            <ClientOnly>
                <font-awesome-icon class="ml-2" icon="fa-solid fa-arrow-right" />
            </ClientOnly>
        </p>
    </div>
</template>
