<script lang="ts" setup></script>

<template>
    <div class="Main container">
        <TheNavbar />
        <div class="Main-content">
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
    &-content {
        flex: 1;
    }
}
</style>
