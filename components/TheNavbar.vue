<script lang="ts" setup>
import { useMediaQuery } from '@vueuse/core'

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

const isToggled = ref(false)

const toggleNavbar = () => {
    isToggled.value = !isToggled.value
}

const getToggledStatus = computed<string | null>(() => {
    return isToggled.value ? 'active' : null
})

const isLargeScreen = useMediaQuery('(min-width: 1024px)')

watch(isLargeScreen, (isLarge) => {
    if (isLarge) isToggled.value = false
})
</script>

<template>
    <nav class="TheNavbar">
        <h6 class="TheNavbar-brand">Brayam Valero</h6>
        <!-- Toggle Button -->
        <button class="TheNavbar-collapse-btn" @click="toggleNavbar">
            <ClientOnly>
                <font-awesome-icon icon="fa-solid fa-bars" />
            </ClientOnly>
        </button>
        <!-- Collaped Content -->
        <div :class="['TheNavbar-collapse', getToggledStatus]">
            <div class="TheNavbar-collapse-header">
                <h6 class="TheNavbar-brand">Brayam Valero</h6>
                <button @click="toggleNavbar" role="button" type="button">
                    <ClientOnly>
                        <font-awesome-icon icon="fa-solid fa-xmark" />
                    </ClientOnly>
                </button>
            </div>
            <ul class="TheNavbar-collapse-body TheNavbar-group mx-auto">
                <li class="TheNavbar-item">
                    <NuxtLink to="/" class="TheNavbar-link">Home</NuxtLink>
                </li>
                <li class="TheNavbar-item">
                    <NuxtLink to="/about" class="TheNavbar-link">Biografia</NuxtLink>
                </li>
                <li class="TheNavbar-item">
                    <NuxtLink to="/projects" class="TheNavbar-link">Proyectos</NuxtLink>
                </li>
                <li class="TheNavbar-item">
                    <NuxtLink to="/blog" class="TheNavbar-link">Blog</NuxtLink>
                </li>
            </ul>
            <ul class="TheNavbar-collapse-body TheNavbar-group">
                <li v-for="{ url, icon, title } in socialLinks" class="TheNavbar-item">
                    <a :href="url" class="TheNavbar-link" target="_blank">
                        <ClientOnly>
                            <font-awesome-icon :icon="icon" />
                        </ClientOnly>
                        <span>{{ title }}</span>
                    </a>
                </li>

                <li class="TheNavbar-item">
                    <ColorMode class="TheNavbar-link" />
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="postcss">
.TheNavbar {
    @apply relative flex flex-wrap items-center justify-between py-5;
    @screen lg {
        @apply justify-start;
    }
    &-brand {
        @apply text-blue-500 mr-5;
    }
    /* Collapse */
    &-collapse {
        @apply flex-1 items-center hidden;
        @screen lg {
            @apply flex;
        }
        &.active {
            @apply absolute flex flex-col items-center bg-white rounded drop-shadow-md w-full top-4 right-0;
            @screen sm {
                @apply w-60;
            }
        }
        &-btn {
            @apply block rounded bg-blue-500 text-white px-2 py-1;
            @screen lg {
                @apply hidden;
            }
        }
        &-header {
            @apply w-full flex justify-between items-center px-4 py-3 border-b;
            & > button {
                @apply text-gray-800;
            }
            @screen lg {
                @apply hidden;
            }
        }
        &-body {
            @apply w-full;
            @screen lg {
                @apply w-auto;
            }
            &:last-child .TheNavbar-item:last-child {
                @apply border-0;
            }
        }
    }
    &-group {
        @apply flex flex-col;
        @screen lg {
            @apply flex-row gap-5;
        }
    }
    &-item {
        @apply block border-b border-dashed;
        @screen lg {
            @apply border-0;
        }
    }
    &-link {
        @apply flex items-center gap-3 text-[14px] text-gray-500 font-light  px-4 py-2 hover:underline hover:text-blue-500;
        @screen lg {
            @apply p-0 dark:text-gray-400;
        }
        & > span {
            @apply block;
            @screen lg {
                @apply hidden;
            }
        }
    }
}
</style>
