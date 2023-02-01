<script lang="ts" setup>
// [Nuxt - LazyAsyncData] => Querying Github Repositories
const { pending, data: repositories } = useLazyAsyncData('getUserRepositories', () =>
    $fetch('https://api.github.com/users/brayamvalero/repos')
)

const userRepositoriesHeading: any = {
    caption: 'Echale un vistazo a',
    title: 'Mis Repositorios',
    description: 'Hay dististas cosas, entre proyectos personales hasta trabajos para clientes',
    position: 'center',
}

const userProjectsHeading: any = {
    caption: 'También puedes ver',
    title: 'Mis Proyectos',
    description: 'Este apartado es de proyectos que no se encuentren en GitHub',
    position: 'center',
}

useHead({
    title: 'Proyectos',
})
</script>

<template>
    <div class="Projects">
        <section class="UserRepositories section-spacing">
            <BaseHeading v-bind="userRepositoriesHeading" />
            <UserRepositories :repositories="repositories" />
        </section>
        <section class="UserRepositories section-spacing">
            <BaseHeading v-bind="userProjectsHeading" />
            <UserProjects />
        </section>
    </div>
</template>
