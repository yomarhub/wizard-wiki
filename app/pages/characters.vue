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
          <CharacterPane v-for="c in filteredCharacters" :key="c.id" class="w-[calc(12.5%-1rem)]" :character="c" />
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

const { hasImage } = useCharacterFilter()

// useAsyncData retourne { data, pending, error, refresh }
const { data: allCharacters/* , pending, error */ } = await useCharacters()

const filteredCharacters = computed(() => {
  if (!allCharacters.value) return []
  else if (hasImage.value) return allCharacters.value.filter(c => c.image && c.image.trim() !== '')
  return allCharacters.value
})
</script>

<style scoped></style>
