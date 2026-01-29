<template>
  <NuxtLayout name="sidebar">
    <template #sidebar>
      <AppSidebar class="size-full" />
    </template>

    <div class="p-10 overflow-y-auto">
      <NextPage />
      <h1 class="text-3xl font-bold mb-2">Harry Potter Characters</h1>
      <p class="mb-6">Liste des personnages de l'univers Harry Potter</p>

      <div class="w-full bg-gray-100 rounded-2xl p-4">
        <!-- <h2 class="text-2xl font-bold mb-4">{{ filteredCharacters.length }} personnages</h2> -->
        <ul class="flex flex-wrap justify-start gap-4">
          <CharacterPane v-for="c in filteredCharacters" :key="c?.id" class="w-[calc(12.5%-1rem)]" :character="c" />
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})
const { $hpAPI } = useNuxtApp()

const { filters } = useCharacterFilter()
const { data: characters } = await useLazyAsyncData(
  'characters',
  () => $hpAPI.getCharacters()
)

// Helper pour accéder aux propriétés de manière typée
function toType<T>(character: T, field: string) {
  return character[field as keyof T]
}

const filteredCharacters = computed(() => characters.value?.filter((character) => {
  for (const [field, value] of Object.entries(filters.value)) {
    if (value === null || value === undefined || (typeof value === 'boolean' && !value) || (typeof value === 'string' && value === '') || (Array.isArray(value) && (value as unknown[]).length === 0)) {
      continue
    }

    const charValue = toType(character, field)

    if (['name', 'dateOfBirth', 'actor'].includes(field)) {
      if (!charValue || !String(charValue).match(RegExp(value as string, 'i'))) return false
    } else if (['alternate_names', 'alternate_actors'].includes(field)) {
      if (!Array.isArray(charValue) || !String(charValue.join(' ')).match(RegExp(value as string, 'i'))) return false
    } else if (['wizard', 'hogwartsStudent', 'hogwartsStaff', 'alive'].includes(field)) {
      if (Boolean(charValue) !== value) return false
    } else if (field === 'image') {
      if (value === true && (!charValue || charValue === '')) return false
    } else {
      // Pour tous les autres champs (species, gender, house, yearOfBirth, ancestry, eyeColour, hairColour, patronus, etc.)
      if (typeof charValue !== 'boolean' && charValue !== value) return false
    }
  }
  return true
}))
</script>
