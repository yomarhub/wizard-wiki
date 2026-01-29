<template>
  <div class="p-10 overflow-y-auto">
    <NextPage />
    <h1 class="text-3xl font-bold mb-2">Spells &amp; Incantations</h1>
    <p class="mb-6">A comprehensive collection of magical spells</p>

    <div class="w-full bg-accented rounded-2xl p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SpellCard v-for="s in filteredSpells" :key="s.id" :spell="s" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $hpAPI } = useNuxtApp()
const { filters } = useSpellFilter()

const { data: spells } = await useLazyAsyncData(
  'spells',
  () => $hpAPI.getSpells()
)

const filteredSpells = computed(() => spells.value?.filter((spell) => {
  if (filters.value.spell && !spell.spell.toLowerCase().includes(filters.value.spell.toLowerCase())) {
    return false
  }
  if (filters.value.type && spell.type !== filters.value.type) {
    return false
  }
  if (filters.value.effect && !spell.effect.toLowerCase().includes(filters.value.effect.toLowerCase())) {
    return false
  }
  return true
}))
</script>
