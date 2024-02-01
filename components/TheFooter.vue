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
    <footer class="TheFooter">
        <div class="TheFooter-container">
            <p class="text-stone-400 font-light">©2022 - Brayam Valero. All Rights Reserved.</p>
            <ul class="TheFooter-group">
                <li v-for="{ url, icon } in socialLinks" class="TheFooter-item">
                    <a
                        :href="url"
                        class="text-base text-white transition ease-in-out duration-300 hover:text-red-500"
                        target="_blank"
                    >
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
    @apply bg-stone-900 border-stone-700 border-t dark:border-stone-700;
    &-container {
        @apply container py-6 text-center flex justify-center flex-col gap-4;
        @screen sm {
            @apply flex-row justify-between;
        }
    }
    &-group {
        @apply flex justify-center gap-8;
    }
}
</style>
