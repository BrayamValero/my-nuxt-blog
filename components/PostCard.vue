<script lang="ts" setup>
interface Props {
    post: any
}

const props = defineProps<Props>()

const navigateToPost = () => {
    navigateTo(props.post._path)
}

const humanRedableDate = computed(() => {
    return new Date(props.post.date).toDateString()
})
</script>

<template>
    <div class="BlogCard">
        <img class="BlogCard-img" src="https://i.imgur.com/AD3MbBi.jpeg" alt="image" @click="navigateToPost" />
        <!-- Body -->
        <div class="BlogCard-body">
            <!-- Image -->
            <div class="BlogCard-categories">
                <CategoryBadge v-for="tag in post.tags" :category="tag" />
            </div>
            <h2 class="BlogCard-title">
                <NuxtLink :to="post._path" class="block">
                    {{ post.title }}
                </NuxtLink>
            </h2>
            <h2 class="BlogCard-description">{{ post.description }}</h2>
        </div>
        <!-- Footer -->
        <div class="BlogCard-footer">
            <span class="BlogCard-author">{{ post.author }}</span>
            <time class="BlogCard-date" :datetime="post.date">{{ humanRedableDate }}</time>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.BlogCard {
    @apply bg-white flex flex-col rounded-md shadow-lg shadow-gray-200/50;
    &-img {
        @apply object-cover cursor-pointer w-full h-36 rounded-tl-md rounded-tr-md;
    }
    &-body {
        @apply p-3;
    }
    &-categories {
        @apply flex flex-wrap;
        > *:not(:last-child) {
            @apply mr-2;
        }
    }
    &-title {
        font-size: 18px;
        @apply font-bold text-gray-800 mt-2;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    &-description {
        @apply text-gray-500 mb-2;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    &-footer {
        font-size: 12px;
        @apply text-gray-500 mt-auto border-t-[1px] border-gray-100 py-2 px-3;
    }
    &-author::after {
        content: '·';
        margin: 0 0.25rem;
    }
}
</style>
