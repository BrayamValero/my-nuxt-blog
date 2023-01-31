<script lang="ts" setup>
// [Nuxt Content] => Querying blog posts content
const { data: posts } = await useAsyncData('getPosts', () => queryContent('blog').limit(3).find())

useHead({
    title: 'Home',
})
</script>

<template>
    <div class="Home mb-10">
        <!-- Receive Users -->
        <section class="Hero py-20 text-center">
            <div class="Home-card">
                <img class="Home-card-img" src="~/assets/img/profile_pic.jpg" />
                <div class="Home-card-body">
                    <h1 class="Home-card-caption">Brayam Valero</h1>
                    <h2 class="Home-card-title">Frontend Developer</h2>
                    <p class="Home-card-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, voluptate laboriosam optio porro
                        magnam facere doloribus sint. Ipsam blanditiis quis corrupti in tempore consequuntur ab.
                    </p>
                    <ul class="Home-card-items">
                        <li>
                            <ClientOnly>
                                <font-awesome-icon icon="fa-solid fa-location-dot" />
                            </ClientOnly>
                            Venezuela
                        </li>
                        <li>
                            <ClientOnly>
                                <font-awesome-icon icon="fa-solid fa-house-laptop" />
                            </ClientOnly>
                            AllProperty
                        </li>
                        <li>
                            <ClientOnly>
                                <font-awesome-icon icon="fa-solid fa-cake-candles" />
                            </ClientOnly>
                            29/11/1992
                        </li>
                    </ul>
                    <button class="btn btn-primary mt-2">Ver Curriculum</button>
                </div>
            </div>
        </section>
        <UserPosts :posts="posts" />
    </div>
</template>
<style lang="postcss">
.Home {
    &-card {
        @apply relative flex flex-col bg-white border rounded-md;
        &-caption {
            @apply text-blue-500 font-bold;
        }
        &-title {
            @apply text-[1.5rem] text-gray-800 font-bold;
        }
        &-description {
            @apply text-[1rem] text-gray-500 font-light;
        }
        &-body {
            @apply pb-7 pt-14 px-7 flex-1;
        }
        &-img {
            @apply absolute rounded-full w-24 h-24 block mx-auto object-cover mx-auto left-0 right-0 top-[-3rem];
        }
        &-items {
            @apply flex flex-wrap justify-center gap-4 my-3;
            & > li {
                @apply text-sm text-gray-400 font-light flex items-center gap-2;
                & > svg {
                    @apply text-blue-500;
                }
            }
        }
    }
}
</style>
