<script lang="ts" setup>
import { useMediaQuery } from '@vueuse/core'

const closeNavbar = () => (isToggled.value = false)

const defaultLinks = [
    {
        to: '/',
        title: 'Inicio',
        event: closeNavbar,
    },
    {
        to: '/about',
        title: 'Biografia',
        event: closeNavbar,
    },
    {
        to: '/projects',
        title: 'Proyectos',
        event: closeNavbar,
    },
    {
        to: '/blog',
        title: 'Blog',
        event: closeNavbar,
    },
]

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
        <div class="TheNavbar-container">
            <h6 class="TheNavbar-brand" @click="navigateTo('/')">Brayam Valero</h6>
            <!-- Toggle Button -->
            <button class="TheNavbar-collapse-btn" @click="toggleNavbar">
                <ClientOnly>
                    <font-awesome-icon icon="fa-solid fa-bars" />
                </ClientOnly>
            </button>
            <!-- Collaped Content -->
            <div :class="['TheNavbar-collapse', getToggledStatus]">
                <div class="TheNavbar-collapse-header">
                    <h6 class="TheNavbar-brand-mobile" @click="navigateTo('/')">Brayam Valero</h6>
                    <button @click="toggleNavbar" role="button" type="button">
                        <ClientOnly>
                            <font-awesome-icon icon="fa-solid fa-xmark" />
                        </ClientOnly>
                    </button>
                </div>
                <ul class="TheNavbar-collapse-body TheNavbar-group mx-auto">
                    <li v-for="{ to, title, event } in defaultLinks" class="TheNavbar-item">
                        <NuxtLink :to="to" @click="event" class="TheNavbar-link">{{ title }}</NuxtLink>
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
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="postcss">
.TheNavbar {
    @apply bg-stone-900 border-stone-700 border-b;

    &-container {
        @apply container relative flex flex-wrap items-center justify-between py-5 z-10;
        @screen lg {
            @apply justify-start;
        }
    }
    &-brand {
        @apply cursor-pointer text-white mr-5;
        &-mobile {
            @apply cursor-pointer text-red-500;
        }
    }
    /* Collapse */
    &-collapse {
        @apply flex-1 items-center hidden;
        @screen lg {
            @apply flex;
        }
        &.active {
            @apply absolute flex flex-col items-center bg-white rounded drop-shadow-md w-4/5 top-3 right-[1rem];
            @screen sm {
                @apply w-60;
            }
        }
        &-btn {
            @apply block rounded bg-red-500 text-white px-2 py-1;
            @screen lg {
                @apply hidden;
            }
        }
        &-header {
            @apply w-full flex justify-between items-center px-4 py-3 border-b;
            & > button {
                @apply text-stone-800;
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
        @apply w-full flex items-center gap-3 text-[14px] text-stone-400 font-light px-4 py-2 hover:underline hover:text-red-500;
        @screen lg {
            @apply p-0 dark:text-stone-400;
        }
        & > svg {
            @apply text-stone-400;
            @screen lg {
                @apply text-white hover:text-red-500;
            }
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
