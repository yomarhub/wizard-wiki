<template>
  <section class="flex flex-col gap-3 p-4 bg-slate-900/40 border border-slate-800 rounded-2xl">
    <h3 class="text-lg font-serif text-yellow-500 mb-2">{{ $t('sidebar.characters.filter-title') }}</h3>

    <UInput v-model="filters.name" :placeholder="$t('sidebar.characters.search-placeholder')" icon="i-lucide-search" />
    <UInputMenu v-model="filters.house" :items="houses" :placeholder="$t('sidebar.characters.house-placeholder')" clear value-key="value" />
    <UInputMenu v-model="filters.species" :items="species" :placeholder="$t('sidebar.characters.species-placeholder')" clear value-key="value" />
    <UInputMenu v-model="filters.ancestry" :items="ancestries" :placeholder="$t('sidebar.characters.ancestry-placeholder')" clear value-key="value" />

    <USwitch v-model="filters.wizard" :label="$t('sidebar.characters.wizard-label')" />
    <USwitch v-model="filters.hogwartsStudent" :label="$t('sidebar.characters.student-label')" />
    <USwitch v-model="filters.hogwartsStaff" :label="$t('sidebar.characters.staff-label')" />
    <USwitch v-model="filters.alive" :label="$t('sidebar.characters.alive-label')" />
    <USwitch v-model="filters.image" :label="$t('sidebar.characters.image-label')" />

    <UButton class="mt-2" color="error" variant="soft" @click="clearFilters">
      <UIcon name="i-lucide-x" class="mr-2" />
      {{ $t('sidebar.characters.clear') }}
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
