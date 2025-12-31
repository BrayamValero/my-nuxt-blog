<script lang="ts" setup>
const newPlayer = ref({
    name: '',
    amount: '',
    type: 'MM',
})

function addPlayer() {
    if (!newPlayer.value.name.trim()) return
    schema.value.push({
        name: newPlayer.value.name,
        amount: newPlayer.value.amount,
        type: newPlayer.value.type,
    })
    newPlayer.value = {
        name: '',
        amount: '',
        type: 'MM',
    }
}

function removePlayer(index: number) {
    schema.value.splice(index, 1)
}

const schema: any = ref([])

function formatCurrency(amount: number) {
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    })
}

const swapType = (index: number) => {
    schema.value[index].type = schema.value[index].type === 'MM' ? 'KK' : 'MM'
}

function getConvertedAmount(player: any) {
    let amount

    if (!player.amount) return '0'

    if (player.type === 'MM') {
        amount = formatCurrency(parseFloat(player.amount) * 1000000)
    } else {
        amount = formatCurrency(parseInt(player.amount) * 1000)
    }

    return `${amount} ${player.type === 'MM' ? 'Million' : 'Thousand'}`
}

const getTotalGains = computed(() => {
    let total = 0
    for (const player of schema.value) {
        if (player.amount) {
            const amount = parseFloat(player.amount)
            if (player.type === 'MM') {
                total += amount * 1000000
            } else {
                total += amount * 1000
            }
        }
    }
    return {
        total: formatCurrency(total),
        split: formatCurrency(total / schema.value.length),
    }
})

const getTradeInstructions = computed(() => {
    let totalRaw = 0
    for (const player of schema.value) {
        if (player.amount) {
            const amount = parseFloat(player.amount)
            if (player.type === 'MM') {
                totalRaw += amount * 1000000
            } else {
                totalRaw += amount * 1000
            }
        }
    }
    const fairShareRaw = totalRaw / schema.value.length

    const playerBalances: { index: number; balance: number }[] = []
    for (let i = 0; i < schema.value.length; i++) {
        const player = schema.value[i]
        let actualGain = 0
        if (player.amount) {
            const amount = parseFloat(player.amount)
            if (player.type === 'MM') {
                actualGain = amount * 1000000
            } else {
                actualGain = amount * 1000
            }
        }
        playerBalances.push({
            index: i,
            balance: actualGain - fairShareRaw, // positive means owes, negative means owed
        })
    }

    const payers = playerBalances.filter((p) => p.balance > 0).sort((a, b) => b.balance - a.balance) // Givers, descending
    const receivers = playerBalances.filter((p) => p.balance < 0).sort((a, b) => a.balance - b.balance) // Receivers, ascending (most owed first)

    const trades: string[] = []
    let payerIndex = 0
    let receiverIndex = 0

    while (payerIndex < payers.length && receiverIndex < receivers.length) {
        let payer = payers[payerIndex]
        let receiver = receivers[receiverIndex]

        const amountToTransfer = Math.min(payer.balance, Math.abs(receiver.balance))

        if (amountToTransfer > 0) {
            trades.push(
                `${schema.value[payer.index].name} must give ${formatCurrency(amountToTransfer)} to ${
                    schema.value[receiver.index].name
                }`
            )
        }

        payer.balance -= amountToTransfer
        receiver.balance += amountToTransfer // balance becomes less negative or zero

        if (payer.balance <= 0.01) {
            // Use a small epsilon for float comparison
            payerIndex++
        }
        if (receiver.balance >= -0.01) {
            // Use a small epsilon for float comparison
            receiverIndex++
        }
    }

    return trades
})

useHead({
    title: 'Albion Split Calculator',
    meta: [
        {
            name: 'description',
            content: 'Calculadora de Albion Split',
        },
    ],
})
</script>

<template>
    <div class="container mx-auto py-12 px-4">
        <h1 class="text-xl font-bold mb-2 text-center text-white">Albion Split Calculator</h1>
        <p class="text-center font-light text-gray-300 mb-8">Calculate your Albion split on Abyssal Depths</p>

        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-3">
                <div class="flex flex-col gap-2">
                    <BaseInput
                        v-model="newPlayer.name"
                        label="Player Name"
                        type="text"
                        name="playerName"
                        placeholder="E.g. Munbani"
                        size="sm"
                        fullwidth
                    />
                    <BaseButton variant="green" size="sm" class="w-full" @click="addPlayer">Add Player</BaseButton>
                </div>
            </div>
            <div class="col-span-full">
                <template v-for="(player, index) in schema" :key="index">
                    <div class="flex flex-row items-end gap-2">
                        <div>
                            <BaseInput
                                v-model="player.amount"
                                :label="player.name"
                                type="number"
                                :name="`player${index + 1}`"
                                placeholder="Loot amount"
                                size="sm"
                                fullwidth
                            />
                        </div>
                        <div class="flex flex-row gap-2">
                            <BaseButton class="flex-shrink-0" variant="blue" size="sm" @click="swapType(index)">
                                <font-awesome-icon icon="fa-solid fa-exchange" /> Swap
                            </BaseButton>
                            <BaseButton variant="red" size="sm" @click="removePlayer(index)">
                                <font-awesome-icon icon="fa-solid fa-trash" /> Remove
                            </BaseButton>
                        </div>
                    </div>
                    <small class="text-yellow-300 block mt-3"
                        >Amount in {{ player.type === 'MM' ? 'Millions' : 'Thousands' }}</small
                    >
                </template>

                <p class="text-center font-light text-gray-300 mb-8">Ganancias Totales: {{ getTotalGains.total }}</p>
                <p class="text-center font-light text-gray-300 mb-8">
                    Ganancias por jugador: {{ getTotalGains.split }}
                </p>

                <p class="text-center font-light text-gray-300 mb-8">Trade Instructions:</p>
                <ul>
                    <li v-for="instruction in getTradeInstructions" :key="instruction">{{ instruction }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped></style>
