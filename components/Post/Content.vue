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
    <aside class="bg-white border border-stone-300 rounded-lg">
        <div class="p-3">
            <p class="font-bold text-base text-stone-800">Tabla de contenido</p>
        </div>
        <div class="p-3 border-t border-stone-300">
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
