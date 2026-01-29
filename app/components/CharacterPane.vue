<template>
  <li v-if="character" class="flex flex-col m-2 bg-elevated p-4 rounded-lg shadow-md">
    <NuxtImg v-if="character?.image" :src="character?.image" class="min-w-full rounded-lg mb-2" />
    <h3 v-if="character?.name" class="text-xl font-semibold">{{ character?.name }}</h3>
    <p v-if="character?.house || 'Unknown'">House: {{ character?.house || "Unknown" }}</p>
    <p v-if="character?.species">Species: {{ character?.species }}</p>
    <p v-if="character?.actor">Actor: {{ character?.actor }}</p>
  </li>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Character } from '~/utils/types'

defineProps({
  character: { type: Object as PropType<Character>, required: true }
})
</script>

<style scoped>
li:not(:has(img)) {
  justify-content: center;
}
</style>
