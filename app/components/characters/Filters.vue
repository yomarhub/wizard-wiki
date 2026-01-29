<template>
  <section class="flex flex-col gap-3 p-4 bg-slate-900/40 border border-slate-800 rounded-2xl">
    <h3 class="text-lg font-serif text-yellow-500 mb-2">Filter Characters</h3>

    <UInput v-model="filters.name as string" placeholder="Search by name..." icon="i-lucide-search" />

    <USelect v-model="filters.house" :options="houses" placeholder="Select house" />

    <USelect v-model="filters.species" :options="species" placeholder="Select species" />

    <USelect v-model="filters.ancestry" :options="ancestries" placeholder="Select ancestry" />

    <div class="flex gap-2">
      <UCheckbox v-model="filters.wizard as boolean" label="Wizard" />
      <UCheckbox v-model="filters.hogwartsStudent as boolean" label="Hogwarts Student" />
    </div>

    <div class="flex gap-2">
      <UCheckbox v-model="filters.hogwartsStaff as boolean" label="Staff" />
      <UCheckbox v-model="filters.alive as boolean" label="Alive" />
    </div>

    <UCheckbox v-model="filters.image as boolean" label="Has Image Only" />

    <UButton class="mt-2" color="red" variant="soft" @click="clearFilters">
      <UIcon name="i-lucide-x" class="mr-2" />
      Clear Filters
    </UButton>
  </section>
</template>

<script setup lang="ts">
const { filters, clearFilters } = useCharacterFilter()

const houses = ref(['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'])
const species = ref(['human', 'half-giant', 'werewolf', 'ghost', 'house-elf', 'goblin', 'cat', 'owl'])
const ancestries = ref(['half-blood', 'pure-blood', 'muggleborn', 'squib'])
</script>

<style scoped>
section {
  max-height: 80vh;
  overflow-y: auto;
}
</style>
