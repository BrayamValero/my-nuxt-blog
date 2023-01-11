<script lang="ts" setup>
const socialLinks = [
    {
        url: 'https://twitter.com/BrayamValero',
        icon: 'fa-brands fa-twitter',
    },
    {
        url: 'https://github.com/BrayamValero',
        icon: 'fa-brands fa-github',
    },
    {
        url: 'https://www.linkedin.com/in/brayamvalero/',
        icon: 'fa-brands fa-linkedin',
    },
]
</script>

<template>
    <nav class="container flex flex-wrap items-center justify-between gap-5 py-5">
        <div>Brayam Valero</div>
        <div class="flex gap-5">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">Biografia</NuxtLink>
            <NuxtLink to="/projects">Proyectos</NuxtLink>
            <NuxtLink to="/blog">Blog</NuxtLink>
        </div>
        <div class="flex items-center gap-5">
            <ul class="flex gap-4">
                <client-only>
                    <li v-for="{ url, icon } in socialLinks">
                        <a :href="url">
                            <font-awesome-icon :icon="icon" target="_blank" />
                        </a>
                    </li>
                </client-only>
            </ul>
            <button class="btn btn-sm btn-primary">
                <ColorMode />
            </button>
        </div>
    </nav>
</template>
