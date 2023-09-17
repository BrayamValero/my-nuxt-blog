<script lang="ts" setup>
useHead({
    title: 'Biografia',
})
</script>

<template>
    <div class="About container">
        <section class="section-spacing">
            <ContentDoc :path="$route.path">
                <template v-slot="{ doc }">
                    <ContentRenderer :value="doc" class="prose dark:prose-invert max-w-none" />
                </template>
                <template #not-found> <h1>Document not found</h1> </template>
            </ContentDoc>
        </section>
    </div>
</template>
