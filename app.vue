<script lang="ts" setup></script>

<template>
    <div class="Main">
        <TheNavbar />
        <NuxtLoadingIndicator />
        <div class="Main-container container py-4">
            <NuxtPage />
        </div>
        <TheFooter />
    </div>
</template>

<style lang="scss" scoped>
.Main {
    display: flex;
    flex-direction: column;
    height: 100vh;

    &-container {
        flex: 1;
    }
}
</style>
