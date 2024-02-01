<script lang="ts" setup>
interface Props {
    project: any
}

const props = defineProps<Props>()

const navigateToProject = () => {
    window.open(props.project.url, '_blank')
}
</script>

<template>
    <div class="ProjectCard card cursor-pointer" @click="navigateToProject">
        <div class="card-body">
            <h1 class="text-title">{{ project.title }}</h1>
            <p class="text-description line-clamp-1">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mt-2">
                <span class="badge badge-primary" v-for="tag in project.tags">{{ tag }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.ProjectCard {
}
</style>
