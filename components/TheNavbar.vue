<template>
    <nav class="bg-gray-800 text-white p-3 flex">
        <div class="pr-10">My Blog</div>
        <div class="flex">
            <NuxtLink class="pr-5" to="/">Home</NuxtLink>
            <NuxtLink class="pr-5" to="/about">About</NuxtLink>
            <NuxtLink class="pr-5" to="/blog">Blog</NuxtLink>
            <ColorMode />
        </div>
    </nav>
</template>
