<script lang="ts" setup>
// [Nuxt Content] => Querying blog posts content
const { data: posts }: any = await useAsyncData('getPosts', () => queryContent('blog').limit(3).find())

const skills: any = [
    {
        name: 'UI / UX Design',
        description:
            'Experto en la creación de interfaces estéticas y funcionales, destacando la precisión visual y la usabilidad',
        icon: 'fa-solid fa-bezier-curve',
    },
    {
        name: 'Clean code',
        description:
            'Especializado en codificación meticulosa, priorizando la legibilidad y mantenibilidad del código para proyectos eficientes',
        icon: 'fa-solid fa-code',
    },
    {
        name: 'QA Testing',
        description:
            'Profesional en pruebas de calidad, garantizando la integridad funcional y la detección precisa de posibles problemas',
        icon: 'fa-solid fa-code-pull-request',
    },
    {
        name: 'Project Management',
        description:
            'Gestión de proyectos centrada en resultados excepcionales, desde interfaces pulidas hasta una ejecución eficiente',
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
            <div class="md:text-start text-center">
                <h1 class="xl:text-4xl lg:text-3xl md:text-2xl text-xl text-white font-bold mb-3">Brayam Valero</h1>
                <TextSubtitle>
                    Soy un
                    <span class="font-bold text-white underline underline-offset-2 decoration-red-500">
                        Software Developer</span
                    >
                    con +6 años de experiencia, mi enfoque en pixel perfect y mi dominio de JavaScript, Vue, Nuxt, y
                    TypeScript me convierten en un desarrollador y diseñador excepcional. Mi versatilidad incluye
                    habilidades de backend, y siempre estoy ansioso por aprender nuevas tecnologías.
                </TextSubtitle>
                <BaseButton class="mt-6" variant="red" size="lg" rounded>
                    Ver Curriculum
                    <font-awesome-icon icon="fa-solid fa-arrow-right" class="ms-1" />
                </BaseButton>
            </div>
            <div class="md:order-last order-first flex justify-center items-center">
                <img
                    class="lg:w-80 lg:h-80 md:w-60 md:h-60 w-36 h-36 rounded-full"
                    src="/jpg/profile-avatar.jpg"
                    alt="profile-avatar"
                />
            </div>
        </section>
        <!-- Experience -->
        <section class="container my-16">
            <!-- Header -->
            <div class="text-center">
                <TextHeading class="mb-2">Experiencia Técnica</TextHeading>
                <TextSubtitle>
                    Soy un profesional multidisciplinario que fusiona arte y código para crear experiencias
                    excepcionales.
                </TextSubtitle>
            </div>
            <!-- Content -->
            <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
                <CardSkills v-for="skill in skills" v-bind="skill" />
            </div>
        </section>
        <!-- Skills -->
        <section class="container my-16">
            <!-- Header -->
            <div class="text-center">
                <TextHeading class="mb-2">Habilidades</TextHeading>
                <TextSubtitle>
                    Domino varios lenguajes de programación, destacando en la creación eficiente y mantenible de
                    soluciones innovadoras.
                </TextSubtitle>
            </div>
            <!-- Content -->
            <div class="flex justify-center">
                <div class="lg:w-4/5 w-full">
                    <div class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 grid-cols-3 gap-6 my-8">
                        <CardTool v-for="tool in tools" v-bind="tool" />
                    </div>
                </div>
            </div>
            <!-- Action -->
            <div class="text-center">
                <BaseButton variant="red" to="/about#habilidades" rounded>
                    Ver más
                    <font-awesome-icon icon="fa-solid fa-arrow-right" class="ms-1" />
                </BaseButton>
            </div>
        </section>
        <!-- Blog Posts -->
        <section class="container my-16">
            <!-- Header -->
            <div class="text-center">
                <TextHeading class="mb-2">Post Recientes</TextHeading>
                <TextSubtitle>
                    Explora mis posts recientes. Comparto ideas frescas y soluciones divertidas sobre tecnología y
                    desarrollo. ¡Échale un ojo y aprende algo nuevo!
                </TextSubtitle>
            </div>
            <!-- Content -->
            <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 my-8">
                <CardPost v-for="post in posts" v-bind="post" />
            </div>
            <!-- Action -->
            <div class="text-center">
                <BaseButton variant="red" to="/blog" rounded>
                    Ver más
                    <font-awesome-icon icon="fa-solid fa-arrow-right" class="ms-1" />
                </BaseButton>
            </div>
        </section>
    </div>
</template>
