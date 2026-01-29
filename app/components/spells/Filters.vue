<template>
  <section class="flex flex-col gap-3 p-4 bg-slate-900/40 border border-slate-800 rounded-2xl">
    <h3 class="text-lg font-serif text-yellow-500 mb-2">Filter Spells</h3>

    <UInput v-model="filters.spell" placeholder="Search spell name..." icon="i-lucide-search" />

    <USelect v-model="filters.type" :options="spellTypes" placeholder="Select spell type" />

    <UInput v-model="filters.effect" placeholder="Search by effect..." />

    <UButton class="mt-2" color="red" variant="soft" @click="clearFilters">
      <UIcon name="i-lucide-x" class="mr-2" />
      Clear Filters
    </UButton>
  </section>
</template>

<script setup lang="ts">
const { filters, clearFilters } = useSpellFilter()

const spellTypes = ref<string[]>([
  'Charm',
  'Curse',
  'Hex',
  'Jinx',
  'Spell',
  'Transfiguration',
  'Counter-spell',
  'Enchantment'
])
</script>
