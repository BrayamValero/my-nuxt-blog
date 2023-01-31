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
    <footer class="TheFooter">
        <div class="TheFooter-container">
            <p class="text-stone-400 text-sm font-light">©2022 - Brayam Valero. All Rights Reserved.</p>
            <ul class="TheFooter-group">
                <li v-for="{ url, icon, title } in socialLinks" class="TheFooter-item">
                    <a :href="url" class="TheFooter-link" target="_blank">
                        <ClientOnly>
                            <font-awesome-icon :icon="icon" />
                        </ClientOnly>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<style lang="postcss">
.TheFooter {
    @apply bg-stone-900 border-stone-900 border-t dark:border-stone-700;
    &-container {
        @apply container py-4 text-center flex justify-center flex-col gap-4;
        @screen sm {
            @apply flex-row justify-between;
        }
    }
    &-group {
        @apply flex justify-center gap-5;
    }

    &-link {
        @apply flex items-center gap-2 hover:text-red-500;
    }
}
</style>
