<script lang="ts" setup>
const getCurrentyear = () => {
    const date = new Date()
    return date.getFullYear()
}
</script>

<template>
    <footer class="TheFooter">
        <div class="TheFooter-container">
            <TextParagraph>©{{ getCurrentyear() }} - Brayam Valero. All Rights Reserved.</TextParagraph>
            <ul class="TheFooter-group">
                <li v-for="{ url, icon } in useSocialLinks" class="TheFooter-item">
                    <a :href="url" class="text-base text-white duration-300 hover:text-red-500" target="_blank">
                        <font-awesome-icon :icon="icon" />
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
