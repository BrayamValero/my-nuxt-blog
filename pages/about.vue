<script lang="ts" setup>
useHead({
    title: 'Biografia',
})
</script>

<template>
    <div class="About">
        <!-- Markdown -->
        <section class="container my-16">
            <ContentDoc class="prose prose-invert max-w-none" />
        </section>
    </div>
</template>
