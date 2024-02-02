<template>
    <div class="Default">
        <div class="Default-overlay">
            <!-- Navbar -->
            <TheNavbar />
            <!-- Content -->
            <slot />
            <!-- Footer -->
            <TheFooter />
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.Default {
    @apply h-screen;
    background-image: linear-gradient(#44403c 0.8px, transparent 0.8px),
        linear-gradient(90deg, #44403c 0.8px, transparent 0.8px), linear-gradient(#44403c 0.4px, transparent 0.4px),
        linear-gradient(90deg, #44403c 0.4px, #1c1917 0.4px);
    background-size: 40px 40px, 40px 40px;
    background-position: -0.8px -0.8px, -0.8px -0.8px, -0.4px -0.4px, -0.4px -0.4px;
    background-position: center 68px;
    &-overlay {
        height: inherit;
        background-image: linear-gradient(to top, rgba(28, 25, 23, 1), rgba(28, 25, 23, 0.05));
    }
}

:slotted(div) {
    min-height: calc(80vh);
}
</style>

<style lang="postcss">
.router-link-active {
    @apply !font-bold;
}
</style>
