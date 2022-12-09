<script lang="ts" setup>
interface Props {
    repositories: any
}

defineProps<Props>()
</script>

<template>
    <div class="UserRepositories">
        <div class="grid grid-cols-3 gap-4">
            <div
                class="bg-gray-100 rounded p-5"
                v-for="{
                    id,
                    name,
                    html_url,
                    description,
                    language,
                    license,
                    private: isPrivate,
                    updated_at,
                } in repositories"
                :key="id"
            >
                <p>{{ name }}</p>
                <p>{{ description }}</p>
                <p>{{ language }}</p>
                <p>{{ license ? license.name : 'Sin licencia' }}</p>
                <p>{{ updated_at }}</p>
                <p>Private: {{ isPrivate }}</p>
                <NuxtLink :to="html_url" class="text-blue-500 font-bold" target="blank"> Ir al Repositorio </NuxtLink>
            </div>
        </div>
    </div>
</template>
