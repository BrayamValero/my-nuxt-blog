<script lang="ts" setup></script>

<template>
    <div class="Home">
        <h1>Home Page</h1>
        <p>Lorem Ipsum</p>

        <NuxtLink to="/about" role="button" class="inline-block p-3 bg-gray-800 text-white rounded mt-3">
            About Page
        </NuxtLink>
        <!-- [Nuxt Content] => ContentDoc -->
        <ContentDoc class="mt-3 p-3 bg-gray-300" />
    </div>
</template>

<style lang="scss" scoped>

</style>
