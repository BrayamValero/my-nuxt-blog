<script lang="ts" setup>
const skills = [
    {
        title: 'Frontend',
        items: [
            { name: 'HTML' },
            { name: 'CSS' },
            { name: 'SCSS' },
            { name: 'JavaScript' },
            { name: 'Vue' },
            { name: 'Nuxt' },
            { name: 'TypeScript' },
        ],
    },
    {
        title: 'Backend',
        items: [{ name: 'PHP' }, { name: 'Laravel' }, { name: 'MySQL' }],
    },
    {
        title: 'Herramientas',
        items: [
            { name: 'Git' },
            { name: 'NPM' },
            { name: 'Webpack' },
            { name: 'Figma' },
            { name: 'Postman' },
            { name: 'MySQL Workbench' },
        ],
    },
]
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ul v-for="{ title, items } in skills">
            <li class="text-title">{{ title }}</li>
            <li v-for="{ name } in items" class="text-description">
                {{ name }}
            </li>
        </ul>
    </div>
</template>
