<script lang="ts" setup>
// [Nuxt Content] => Querying blog posts content
const { data: posts }: any = await useAsyncData('getPosts', () => queryContent('blog').limit(3).find())

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

const tools: any = [
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

useHead({
    title: 'Inicio',
})
</script>

<template>
    <div class="Home">
        <!-- Hero -->
        <section class="container grid grid-cols-1 md:grid-cols-2 gap-8 content-center h-[90vh]">
            <div class="text-center sm:text-center md:text-start">
                <h1 class="xl:text-4xl lg:text-3xl md:text-2xl text-xl text-white font-bold mb-3">Brayam Valero</h1>
                <p
                    class="leading-7 sm:leading-8 md:leading-8 xl:leading-8 lg:text-lg md:text-base sm:text-base text-sm text-stone-400 font-light"
                >
                    Soy un
                    <span class="font-bold text-white underline underline-offset-2 decoration-red-500">
                        Software Developer
                    </span>
                    con +6 años de experiencia, mi enfoque en pixel perfect y mi dominio de JavaScript, Vue, Nuxt, y
                    TypeScript me convierten en un desarrollador y diseñador excepcional. Mi versatilidad incluye
                    habilidades de backend, y siempre estoy ansioso por aprender nuevas tecnologías.
                </p>

                <BaseButton class="mt-6" variant="red" size="lg" rounded>
                    Ver Curriculum
                    <ClientOnly>
                        <font-awesome-icon icon="fa-solid fa-arrow-right" class="ms-1" />
                    </ClientOnly>
                </BaseButton>
            </div>
            <div class="order-first md:order-last flex justify-center items-center">
                <img
                    class="w-36 h-36 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full"
                    src="/jpg/profile-avatar.jpg"
                    alt="profile-avatar"
                />
            </div>
        </section>
        <!-- Experience -->
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
        <!-- Skills -->
        <section class="container my-16">
            <div class="text-center">
                <h1 class="text-white text-2xl font-bold mb-2">Experiencia Técnica</h1>
                <p class="text-stone-400 font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, ipsum.
                </p>
            </div>
            <div class="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 grid-cols-3 gap-6 my-8">
                <CardTool v-for="tool in tools" v-bind="tool" />
            </div>
            <div class="text-center">
                <BaseButton variant="red" to="/about#habilidades" rounded>
                    Ver más
                    <ClientOnly>
                        <font-awesome-icon icon="fa-solid fa-arrow-right" class="ms-1" />
                    </ClientOnly>
                </BaseButton>
            </div>
        </section>
        <!-- Blog Posts -->
        <section class="container my-16">
            <div class="mb-8 text-center">
                <h1 class="text-white text-2xl font-bold mb-2">Post Recientes</h1>
                <p class="text-stone-400 font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, ipsum.
                </p>
            </div>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 my-8">
                <CardPost v-for="post in posts" v-bind="post" />
            </div>
            <div class="text-center">
                <BaseButton variant="red" to="/blog" rounded>
                    Ver más
                    <ClientOnly>
                        <font-awesome-icon icon="fa-solid fa-arrow-right" class="ms-1" />
                    </ClientOnly>
                </BaseButton>
            </div>
        </section>
    </div>
</template>
