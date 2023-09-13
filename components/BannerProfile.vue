<script lang="ts" setup>
const socialLinks = [
    {
        url: 'https://twitter.com/BrayamValero',
        icon: 'fa-brands fa-twitter',
        title: 'Twitter',
    },
    {
        url: 'https://github.com/BrayamValero',
        icon: 'fa-brands fa-github',
        title: 'GitHub',
    },
    {
        url: 'https://www.linkedin.com/in/brayamvalero/',
        icon: 'fa-brands fa-linkedin',
        title: 'LinkedIn',
    },
]
</script>

<template>
    <div class="h-full bg-white flex flex-col justify-between p-5 rounded-lg drop-shadow-md">
        <!-- Content -->
        <div>
            <div class="flex items-center gap-4 mb-4">
                <img class="w-20 h-20 rounded-lg" src="/jpg/img-brayam.jpg" alt="Imagen de Brayam" />
                <div>
                    <h1 class="font-bold text-neutral-800 text-lg">Brayam Valero</h1>
                    <p class="font-normal text-neutral-600 mb-1">Software Developer</p>
                    <p class="font-light text-neutral-400 text-xs">San Cristobal, Venezuela</p>
                </div>
            </div>
            <p class="font-normal text-neutral-600 text-sm leading-7">
                Software Developer con +5 años de experiencia en diseño UI/UX y desarrollo Frontend. Mi stack preferido
                y más usado actualmente es JavaScript, Vue, Nuxt, y TypeScript.
            </p>
        </div>
        <!-- Social -->
        <ul class="flex flex-row self-end gap-4 list-none">
            <li v-for="{ url, icon, title } in socialLinks">
                <a :href="url" class="btn btn-primary" target="_blank">
                    <ClientOnly>
                        <font-awesome-icon :icon="icon" />
                    </ClientOnly>
                </a>
            </li>
        </ul>
    </div>
</template>
