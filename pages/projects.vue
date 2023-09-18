<script lang="ts" setup>
// [Nuxt - LazyAsyncData] => Querying Github Repositories
const { pending, data: repositories } = useLazyAsyncData('getUserRepositories', () =>
    $fetch('https://api.github.com/users/brayamvalero/repos')
)

const userRepositoriesHeading: any = {
    title: 'Mis Repositorios',
    description: 'Hay dististas cosas, entre proyectos personales hasta trabajos para clientes',
}

const userProjectsHeading: any = {
    title: 'Mis Proyectos',
    description: 'Este apartado es de proyectos que no se encuentren en GitHub',
}

useHead({
    title: 'Proyectos',
})
</script>

<template>
    <div class="Projects container">
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
