<script lang="ts" setup>
interface Props {
    category: any
}

const props = defineProps<Props>()

const navigateToCategories = () => {
    navigateTo('/blog/category/' + props.category)
}
</script>

<template>
    <span class="CategoryBadge" @click="navigateToCategories"> #{{ category }} </span>
</template>

<style lang="scss" scoped>
.CategoryBadge {
    line-height: 1.1;
    font-size: 70%;
    @apply font-bold inline-block bg-blue-400 text-white px-2 rounded py-1 cursor-pointer;
}
</style>
