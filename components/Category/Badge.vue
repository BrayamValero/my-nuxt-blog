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
    <span class="badge badge-primary cursor-pointer" @click="navigateToCategories"> #{{ category }} </span>
</template>

<style lang="postcss" scoped>
.CategoryBadge {
}
</style>
