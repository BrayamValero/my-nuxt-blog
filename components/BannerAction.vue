<script lang="ts" setup>
interface Props {
    title: string
    description: string
    url: string
}

const props = defineProps<Props>()
</script>

<template>
    <div
        class="bg-white shadow-xl rounded-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 h-full flex flex-col justify-between md:p-6 p-4 cursor-pointer"
    >
        <div>
            <h1 class="font-bold text-red-400 mb-1">{{ title }}</h1>
            <p class="font-light text-gray-400 text-sm leading-7 mb-5">{{ description }}</p>
        </div>

        <p class="flex items-center text-gray-800 text-sm gap-3">
            Ver Mas
            <ClientOnly>
                <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </ClientOnly>
        </p>
    </div>
</template>
