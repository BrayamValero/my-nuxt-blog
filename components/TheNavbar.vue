<script lang="ts" setup>
import { useMediaQuery } from '@vueuse/core'

const defaultLinks = [
    {
        to: '/',
        title: 'Inicio',
    },
    {
        to: '/about',
        title: 'Biografia',
    },
    {
        to: '/blog',
        title: 'Blog',
    },
]

const isToggled = ref(false)

const toggleNavbar = () => (isToggled.value = !isToggled.value)

const getToggledStatus = computed<string | null>(() => (isToggled.value ? 'active' : null))

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
            <BaseButton class="block lg:hidden" variant="red" size="sm" @click="toggleNavbar">
                <font-awesome-icon icon="fa-solid fa-bars" />
            </BaseButton>
            <!-- Collaped Content -->
            <div :class="['TheNavbar-collapse', getToggledStatus]">
                <div class="TheNavbar-collapse-header">
                    <h6 class="TheNavbar-brand-mobile" @click="navigateTo('/')">Brayam Valero</h6>
                    <button @click="toggleNavbar" role="button" type="button">
                        <font-awesome-icon icon="fa-solid fa-xmark" />
                    </button>
                </div>
                <ul class="TheNavbar-collapse-body TheNavbar-group mx-auto">
                    <li v-for="{ to, title } in defaultLinks" class="TheNavbar-item">
                        <NuxtLink :to="to" @click="!isLargeScreen ? toggleNavbar() : false" class="TheNavbar-link">
                            {{ title }}
                        </NuxtLink>
                    </li>
                </ul>
                <ul class="TheNavbar-collapse-body TheNavbar-group">
                    <li v-for="{ url, icon, title } in useSocialLinks" class="TheNavbar-item">
                        <a :href="url" class="TheNavbar-link" target="_blank">
                            <font-awesome-icon :icon="icon" />
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
        @apply cursor-pointer text-white text-xl mr-5;
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
            @apply flex-row gap-8;
        }
    }
    &-item {
        @apply block border-b border-dashed;
        @screen lg {
            @apply border-0;
        }
    }
    &-link {
        @apply transition ease-in-out duration-300 w-full flex items-center gap-3 text-stone-400 font-light px-4 py-2 decoration-red-600 hover:underline hover:underline-offset-2;
        @screen lg {
            @apply p-0 dark:text-stone-400;
        }
        & > svg {
            @apply text-stone-400 transition ease-in-out duration-300;
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
