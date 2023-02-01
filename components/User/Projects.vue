<script lang="ts" setup>
const projects = [
    {
        title: 'Project Alpha',
        description: 'Data dummy, aun por definir',
        tags: ['Vue', 'Nuxt', 'TypeScript'],
        url: 'https://www.google.com/',
    },
    {
        title: 'Project Beta',
        description: 'Data dummy, aun por definir',
        tags: ['Vue', 'Nuxt', 'TypeScript'],
        url: 'https://www.google.com/',
    },
    {
        title: 'Project Gamma',
        description: 'Data dummy, aun por definir',
        tags: ['Vue', 'Nuxt', 'TypeScript'],
        url: 'https://www.google.com/',
    },
]
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard v-for="project in projects" :project="project" />
    </div>
</template>
