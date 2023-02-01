<script lang="ts" setup>
interface Props {
    caption?: string
    title: string
    description: string
    position?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
}

const props = withDefaults(defineProps<Props>(), {
    position: 'center',
})

const getPosition = computed(() => `${props.position}`)
</script>

<template>
    <div class="BaseHeading">
        <span v-if="caption" class="BaseHeading-caption">{{ caption }}</span>
        <h2 class="BaseHeading-title">{{ title }}</h2>
        <p class="BaseHeading-description">{{ description }}</p>
    </div>
</template>

<style lang="postcss">
.BaseHeading {
    align-items: v-bind(getPosition);
    @apply flex flex-col mb-8;
    &-caption {
        @apply text-sm text-red-500 font-medium text-center;
    }
    &-title {
        @apply text-[2rem] text-stone-800 font-bold dark:text-white text-center;
    }
    &-description {
        @apply text-stone-500 text-sm font-light dark:text-stone-400 text-center;
    }
}
</style>
