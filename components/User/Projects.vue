<script lang="ts" setup>
const projects = [
    {
        title: 'Suelas LC',
        description: 'Management and audit system',
        tags: ['html', 'css', 'javascript'],
        url: 'https://www.google.com/',
    },
    {
        title: 'Suelas LC',
        description: 'Management and audit system',
        tags: ['html', 'css', 'javascript'],
        url: 'https://www.google.com/',
    },
    {
        title: 'Suelas LC',
        description: 'Management and audit system',
        tags: ['html', 'css', 'javascript'],
        url: 'https://www.google.com/',
    },
]
</script>

<template>
    <div class="UserProjects">
        <h1 class="text-title mb-4">Trabajos & Collabs</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard v-for="project in projects" :project="project" />
        </div>
    </div>
</template>
