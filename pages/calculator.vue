<script lang="ts" setup>
const schema = ref({
    dolar: undefined as number | undefined,
    binance: undefined as number | undefined,
    list: [] as any[],
    errors: [] as string[],
    lastUpdated: null as Date | null,
})

type PricesResult = {
    euro?: number
    dolar?: number
    binance?: number
    lastUpdated: Date
    errors?: string[]
}

/**
 * Fetch BCV page and Binance P2P price.
 * Note: in a browser this may be blocked by CORS. If you hit CORS issues, call this from server-side (Nuxt server API or serverMiddleware).
 */
async function fetchBcvAndBinance(): Promise<PricesResult> {
    const errors: string[] = []
    const result: PricesResult = { lastUpdated: new Date() }

    // // --- Fetch BCV page and parse prices ---
    // try {
    //     const bcvRes = await fetch('https://www.bcv.org.ve/')
    //     const html = await bcvRes.text()

    //     // Try to find the numbers inside the expected blocks.
    //     // This regex is lenient: it captures numbers with dots and commas.
    //     const regex = /<div[^>]*class="col-sm-6 col-xs-6 centrado"[^>]*>\s*<strong>\s*([\d.,]+)\s*<\/strong>/g
    //     const matches = Array.from(html.matchAll(regex)).map((m) => m[1])

    //     if (matches.length >= 5) {
    //         const normalize = (s: string) =>
    //             parseFloat(
    //                 // remove thousands separators (dot), convert decimal comma to dot
    //                 s.replace(/\./g, '').replace(',', '.')
    //             )

    //         try {
    //             result.euro = normalize(matches[0])
    //         } catch {
    //             errors.push('Error parsing EURO from BCV HTML')
    //         }

    //         try {
    //             result.dolar = normalize(matches[4])
    //         } catch {
    //             errors.push('Error parsing DOLAR from BCV HTML')
    //         }
    //     } else {
    //         errors.push('No suficientes coincidencias en el HTML del BCV')
    //     }
    // } catch (e) {
    //     errors.push(`Error fetching BCV: ${(e as Error).message}`)
    // }

    // --- Fetch Binance P2P price ---
    try {
        const binanceUrl = 'https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search'
        const body = {
            fiat: 'VES',
            page: 1,
            rows: 2,
            tradeType: 'BUY',
            asset: 'USDT',
            countries: [],
            proMerchantAds: false,
            shieldMerchantAds: false,
            filterType: 'tradable',
            periods: [],
            additionalKycVerifyFilter: 0,
            publisherType: null,
            payTypes: [],
            classifies: ['mass', 'profession', 'fiat_trade'],
            tradedWith: false,
            followed: false,
        }

        const binRes = await fetch(binanceUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })

        const json = await binRes.json()

        // The API shape can vary; prefer item 1 if available, fallback to 0.
        const adv = Array.isArray(json?.data) && json.data.length > 0 ? json.data[1]?.adv ?? json.data[0]?.adv : null

        if (adv && adv.price) {
            result.binance = parseFloat(String(adv.price))
            if (Number.isNaN(result.binance)) {
                errors.push('Precio Binance no es un número válido')
                delete result.binance
            }
        } else {
            errors.push('Respuesta de Binance sin datos válidos')
        }
    } catch (e) {
        errors.push(`Error fetching Binance: ${(e as Error).message}`)
    }

    if (errors.length) schema.value.errors = errors

    schema.value.binance = result.binance || 0
    return result
}

onMounted(async () => {
    console.log('Executting Scrapping...')
    await fetchBcvAndBinance()
})

function addListItem() {
    schema.value.list.push({
        amount: null,
        currency: 'VES',
    })
}

const getCalculatedItems = computed(() => {
    const dolarValue = parseFloat(String(schema.value.dolar)) || 0
    const binanceValue = parseFloat(String(schema.value.binance)) || 0

    return schema.value.list.map((item) => {
        const amount = parseFloat(String(item.amount)) || 0
        const currency = item.currency
        if (currency === 'USD') {
            const profit = dolarValue && binanceValue ? Math.abs(amount * dolarValue - amount * binanceValue) : 0
            const profitInUsd = profit > 0 ? profit / binanceValue : 0

            return {
                ...item,
                inDolarBCV: dolarValue ? amount * dolarValue : 0,
                inDolarBinance: binanceValue ? amount * binanceValue : 0,
                profit,
                profitInUsd,
                realValue: amount - profitInUsd,
            }
        } else if (currency === 'VES') {
            return {
                ...item,
                inDolarBCV: dolarValue ? amount / dolarValue : 0,
                inDolarBinance: binanceValue ? amount / binanceValue : 0,
                profit: dolarValue && binanceValue ? amount / dolarValue - amount / binanceValue : 0,
            }
        }
    })
})

const getTotalProfit = computed(() => {
    let totalInVes = 0
    let totalInUsd = 0

    getCalculatedItems.value.forEach((item) => {
        if (item.currency === 'USD') {
            totalInVes += item.profit
            totalInUsd += item.profitInUsd
        } else if (item.currency === 'VES') {
            totalInUsd += item.profit
        }
    })

    return {
        totalInVes,
        totalInUsd,
    }
})

function swapCurrency(index: number) {
    const current = schema.value.list[index].currency
    schema.value.list[index].currency = current === 'VES' ? 'USD' : 'VES'
}

useHead({
    title: 'Calculadora de BCV',
})
</script>

<template>
    <div class="container mx-auto py-12 px-4">
        <h1 class="text-xl font-bold mb-2 text-center text-white">Calculadora de BCV</h1>
        <p class="text-center font-light text-gray-300 mb-8">Proyecto hecho por Juliet y Alejandro</p>

        <div class="grid grid-cols-2 gap-4">
            <div class="col-span-1">
                <BaseInput
                    v-model="schema.dolar"
                    label="Valor BCV"
                    type="text"
                    name="bcv"
                    placeholder="Ingresa el valor BCV"
                    size="sm"
                    fullwidth
                    class="mb-3"
                />
                <a
                    href="https://www.bcv.org.ve/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-blue-400"
                >
                    Página del BCV
                </a>
            </div>
            <div class="col-span-1">
                <BaseInput
                    v-model="schema.binance"
                    label="Valor Binance"
                    type="text"
                    name="binance"
                    placeholder="Ingresa el valor Binance"
                    size="sm"
                    fullwidth
                />
            </div>

            <div class="col-span-full">
                <BaseButton variant="red" size="sm" class="w-full" @click="addListItem">Agregar Ítem</BaseButton>
            </div>

            <div class="col-span-full">
                <div class="flex flex-col gap-5">
                    <div v-for="(item, index) in schema.list" :key="index">
                        <div class="flex items-center gap-2">
                            <BaseInput
                                v-model="schema.list[index].amount"
                                :label="`Item #${index + 1}`"
                                type="text"
                                :name="`amount-${index}`"
                                :placeholder="`Cantidad en ${schema.list[index].currency}`"
                                size="sm"
                                fullwidth
                            />
                            <div class="flex flex-col gap-2">
                                <BaseBadge
                                    @click="swapCurrency(index)"
                                    :variant="schema.list[index].currency === 'VES' ? 'alternative' : 'green'"
                                    class="cursor-pointer flex-shrink-0 d-block"
                                    rounded
                                >
                                    {{ schema.list[index].currency }}
                                </BaseBadge>
                                <BaseButton variant="red" size="sm" @click="schema.list.splice(index, 1)">
                                    <font-awesome-icon icon="fa-solid fa-trash" />
                                </BaseButton>
                            </div>
                        </div>
                        <div class="mt-2">
                            <p
                                v-if="getCalculatedItems[index].currency === 'USD'"
                                class="font-medium text-sm text-orange-400"
                            >
                                Valor Real:
                                <span>${{ getCalculatedItems[index].realValue.toFixed(2) }} USD</span>
                            </p>
                            <p class="text-sm text-gray-300">
                                En {{ schema.list[index].currency === 'USD' ? 'Bolívares' : 'Dólares' }} (BCV):
                                <span class="font-medium"
                                    >{{ getCalculatedItems[index].inDolarBCV.toFixed(2) }}
                                    {{ schema.list[index].currency === 'USD' ? 'VES' : 'USD' }}
                                </span>
                            </p>
                            <p class="text-sm text-gray-300">
                                En {{ schema.list[index].currency === 'USD' ? 'Bolívares' : 'Dólares' }} (Binance):
                                <span class="font-medium"
                                    >{{ getCalculatedItems[index].inDolarBinance.toFixed(2) }}
                                    {{ schema.list[index].currency === 'USD' ? 'VES' : 'USD' }}
                                </span>
                            </p>
                            <p class="text-green-400 text-sm">
                                Ahorro:
                                <template v-if="getCalculatedItems[index].currency === 'USD'">
                                    <span class="font-medium me-3"
                                        >{{ getCalculatedItems[index].profit.toFixed(2) }} VES</span
                                    >
                                    <span class="font-medium"
                                        >${{ getCalculatedItems[index].profitInUsd.toFixed(2) }} USD</span
                                    >
                                </template>
                                <template v-else>
                                    <span class="font-medium">
                                        ${{ getCalculatedItems[index].profit.toFixed(2) }} USD</span
                                    >
                                </template>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-full">
                <div class="bg-stone-800 border border-stone-700 p-2 rounded-md">
                    <p class="text-white">Total: ${{ getTotalProfit.totalInUsd.toFixed(2) }} USD</p>
                    <small>Ahorraste esta cantidad en la compra de {{ schema.list.length }} items</small>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped></style>
