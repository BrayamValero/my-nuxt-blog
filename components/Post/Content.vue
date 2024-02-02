<script lang="ts" setup>
interface Props {
    content: any
}

const props = defineProps<Props>()

const formattedContent = (links: Array<any>) => {
    const _links = links
        .map((link) => {
            let _link = [link]
            if (link.children) {
                const flattened = formattedContent(link.children)
                _link = [link, ...flattened]
            }
            return _link
        })
        .flat(1)
    return _links
}
</script>

<template>
    <aside class="PostContent card">
        <div class="card-header">
            <p class="text-base text-stone-800">Tabla de contenido</p>
        </div>
        <div class="card-body">
            <ul v-if="content.length > 0">
                <li
                    v-for="{ id, text, depth } in formattedContent(content)"
                    :class="depth === 3 ? 'pl-8' : 'pl-4'"
                    :key="id"
                >
                    <NuxtLink :href="`#${id}`" class="text-sm font-light text-stone-500 hover:underline">
                        {{ text }}
                    </NuxtLink>
                </li>
            </ul>
            <p v-else class="text-sm font-light text-stone-500">Whoops, no hay contenido definido</p>
        </div>
    </aside>
</template>
