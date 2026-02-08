<template>
  <section class="flex flex-col gap-3 p-4 bg-slate-900/40 border border-slate-800 rounded-2xl">
    <h3 class="text-lg font-serif text-yellow-500 mb-2">Filter Characters</h3>

    <UInputMenu v-model="filters.name" placeholder="Search by name..." icon="i-lucide-search" />
    <UInputMenu v-model="filters.house" :items="houses" placeholder="Select house" clear value-key="value" />
    <UInputMenu v-model="filters.species" :items="species" placeholder="Select species" clear value-key="value" />
    <UInputMenu v-model="filters.ancestry" :items="ancestries" placeholder="Select ancestry" clear value-key="value" />

    <USwitch v-model="filters.wizard" label="Wizard" />
    <USwitch v-model="filters.hogwartsStudent" label="Hogwarts Student" />
    <USwitch v-model="filters.hogwartsStaff" label="Staff" />
    <USwitch v-model="filters.alive" label="Alive" />
    <USwitch v-model="filters.image" label="Has Image Only" />

    <UButton class="mt-2" color="error" variant="soft" @click="clearFilters">
      <UIcon name="i-lucide-x" class="mr-2" />
      Clear Filters
    </UButton>
  </section>
</template>

<script setup lang="ts">
const { filters, clearFilters } = useCharacterFilter()

const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']
const species = ['human', 'half-giant', 'werewolf', 'ghost', 'house-elf', 'goblin', 'cat', 'owl'].map(s => ({ label: s.charAt(0).toUpperCase() + s.slice(1), value: s }))
const ancestries = ['half-blood', 'pure-blood', 'muggleborn', 'squib'].map(s => ({ label: s.charAt(0).toUpperCase() + s.slice(1), value: s }))

// Make hogwartsStudent and hogwartsStaff mutually exclusive
watch(() => filters.value.hogwartsStudent, (newValue) => {
  if (newValue) filters.value.hogwartsStaff = false
})

watch(() => filters.value.hogwartsStaff, (newValue) => {
  if (newValue) filters.value.hogwartsStudent = false
})
</script>

<style scoped>
section {
  max-height: 80vh;
  overflow-y: auto;
}
</style>
