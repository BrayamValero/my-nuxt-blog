<script lang="ts" setup>
const userInfo = [
    {
        icon: 'fa fa-location-dot',
        title: 'Venezuela',
    },
    {
        icon: 'fa fa-house-laptop',
        title: 'AllProperty',
    },
    {
        icon: 'fa fa-cake-candles',
        title: '29/11/1992',
    },
]
</script>

<template>
    <div class="bg-white shadow-xl rounded-xl md:p-8 p-6">
        <div class="flex h-full sm:flex-row flex-col sm:items-start items-center gap-8">
            <img class="w-[8rem] h-[8rem] rounded-lg" src="/jpg/img-brayam.jpg" alt="Imagen de Brayam" />
            <div class="flex flex-col sm:items-start items-center sm:text-left text-center gap-4 h-full">
                <div>
                    <h1 class="font-black text-neutral-800 text-3xl mb-2">Brayam Valero</h1>
                    <h2 class="font-normal text-red-500 text-2xl">Software Developer</h2>
                </div>
                <p class="font-light text-neutral-400 text-sm leading-7 flex-1">
                    Con 5 años de experiencia, mi enfoque en pixel perfect y mi dominio de JavaScript, Vue, Nuxt, y
                    TypeScript me convierten en un desarrollador y diseñador excepcional. Mi versatilidad incluye
                    habilidades de backend, y siempre estoy ansioso por aprender nuevas tecnologías. Mi capacidad de
                    comunicación y liderazgo son activos clave para el éxito del equipo.
                </p>

                <ul class="flex flex-row flex-wrap list-none gap-5">
                    <li v-for="{ icon, title } in userInfo" class="flex items-center flex-nowrap text-sm gap-2">
                        <ClientOnly>
                            <font-awesome-icon :icon="icon" class="text-red-500" />
                        </ClientOnly>
                        <span class="text-neutral-800">
                            {{ title }}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
