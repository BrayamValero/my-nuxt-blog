<script lang="ts" setup>
// [Nuxt Content] => Querying blog posts content
const { data: posts } = await useAsyncData('getPosts', () => queryContent('blog').limit(3).find())

const baseHeading: any = {
    title: 'Mis Publicaciones',
    description: 'Te invito a leer mis publicaciones',
}

useHead({
    title: 'Inicio',
})

const skills: any = [
    {
        name: 'UI / UX Design',
        description: 'Me especializo en crear interfaces limpias, funcionales y pixel-perfect',
        icon: 'fa-solid fa-bezier-curve',
    },
    {
        name: 'Clean code',
        description: 'Me especializo en crear interfaces limpias, funcionales y pixel-perfect',
        icon: 'fa-solid fa-code',
    },
    {
        name: 'QA Testing',
        description: 'Me especializo en crear interfaces limpias, funcionales y pixel-perfect',
        icon: 'fa-solid fa-code-pull-request',
    },
    {
        name: 'Project Management',
        description: 'Me especializo en crear interfaces limpias, funcionales y pixel-perfect',
        icon: 'fa-regular fa-clipboard',
    },
]

const getIcon = (name: string) => defineAsyncComponent(() => import(`~/assets/icons/${name}.svg`))

const tools = [
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css3' },
    { name: 'Sass', icon: 'sass' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'PHP', icon: 'php' },
    { name: 'MySQL', icon: 'database' },
    { name: 'Vue', icon: 'vuejs' },
    { name: 'Nuxt', icon: 'nuxtjs' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'React', icon: 'reactjs' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Laravel', icon: 'laravel' },
]
</script>

<template>
    <div class="Home">
        <!-- Section -->
        <section class="Home-hero">
            <div class="Home-hero-overlay">
                <div class="container grid grid-cols-1 md:grid-cols-2 gap-8 content-center h-full">
                    <div class="text-center sm:text-center md:text-start">
                        <h1 class="xl:text-4xl lg:text-3xl md:text-2xl text-xl text-white font-bold mb-3">
                            Brayam Valero
                        </h1>
                        <p
                            class="leading-7 sm:leading-8 md:leading-8 xl:leading-8 lg:text-lg md:text-base sm:text-base text-sm text-stone-400 font-light"
                        >
                            Soy un
                            <span class="font-bold text-white underline underline-offset-2 decoration-red-500">
                                Software Developer
                            </span>
                            con +6 años de experiencia, mi enfoque en pixel perfect y mi dominio de JavaScript, Vue,
                            Nuxt, y TypeScript me convierten en un desarrollador y diseñador excepcional. Mi
                            versatilidad incluye habilidades de backend, y siempre estoy ansioso por aprender nuevas
                            tecnologías.
                        </p>

                        <BaseButton class="mt-6" variant="red" size="lg" rounded> Ver Curriculum</BaseButton>
                    </div>
                    <div class="order-first md:order-last flex justify-center items-center">
                        <img
                            class="w-36 h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full"
                            src="/jpg/profile-avatar.jpg"
                            alt="profile-avatar"
                        />
                    </div>
                </div>
            </div>
        </section>
        <!-- Section -->
        <section class="container mb-16">
            <div class="mb-8 text-center">
                <h1 class="text-white text-2xl font-bold mb-2">Experiencia Técnica</h1>
                <p class="text-stone-400 font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, ipsum.
                </p>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                <CardSkills v-for="skill in skills" v-bind="skill" />
            </div>
        </section>
        <!-- Section -->
        <section class="container my-16">
            <div class="mb-8 text-center">
                <h1 class="text-white text-2xl font-bold mb-2">Experiencia Técnica</h1>
                <p class="text-stone-400 font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, ipsum.
                </p>
            </div>
            <div class="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 grid-cols-3 gap-6">
                <div
                    v-for="{ icon, name } in tools"
                    class="md:justify-start justify-center rounded-lg border border-stone-700 bg-stone-800 p-4 flex items-center gap-4 ring-0 cursor-pointer hover:ring-red-500/50 hover:border-red-500/50 hover:ring-2 hover:scale-105 duration-300"
                >
                    <component :is="getIcon(icon)" class="text-red-500 text-2xl shrink-0"></component>
                    <span class="text-white md:block hidden">{{ name }}</span>
                </div>
            </div>
        </section>
        <!-- Section -->
        <section class="container my-16">
            <div class="mb-8 text-center">
                <h1 class="text-white text-2xl font-bold mb-2">Post Recientes</h1>
                <p class="text-stone-400 font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, ipsum.
                </p>
            </div>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
                <CardPost v-for="post in posts" :post="post" />
            </div>
        </section>
    </div>
</template>

<style lang="postcss">
.Home-hero {
    @apply h-[90vh];
    background-image: linear-gradient(#44403c 0.8px, transparent 0.8px),
        linear-gradient(90deg, #44403c 0.8px, transparent 0.8px), linear-gradient(#44403c 0.4px, transparent 0.4px),
        linear-gradient(90deg, #44403c 0.4px, #1c1917 0.4px);
    background-size: 40px 40px, 40px 40px;
    background-position: -0.8px -0.8px, -0.8px -0.8px, -0.4px -0.4px, -0.4px -0.4px;
    &-overlay {
        height: inherit;
        background-image: linear-gradient(to top, rgba(28, 25, 23, 1), rgba(28, 25, 23, 0.15));
    }
}
</style>
