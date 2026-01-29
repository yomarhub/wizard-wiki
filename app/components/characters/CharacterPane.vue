<template>
  <li v-if="character && false" class="flex flex-col m-2 bg-elevated p-4 rounded-lg shadow-md">
    <NuxtImg v-if="character?.image" :src="character?.image" class="min-w-full rounded-lg mb-2" />
    <h3 v-if="character?.name" class="text-xl font-semibold">{{ character?.name }}</h3>
    <p v-if="character?.house || 'Unknown'">House: {{ character?.house || "Unknown" }}</p>
    <p v-if="character?.species">Species: {{ character?.species }}</p>
    <p v-if="character?.actor">Actor: {{ character?.actor }}</p>
  </li>
  <div v-else class="char-card bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300">
    <div class="h-64 overflow-hidden relative group">
      <img src="https://ik.imagekit.io/hpapi/harry.jpg" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-linear-to-t from-[#0B101B] to-transparent"></div>
      <span class="absolute bottom-3 left-3 text-[10px] font-bold text-red-500 bg-red-900/20 px-2 py-1 border border-red-900/30 rounded">GRYFFINDOR</span>
    </div>
    <div class="p-4">
      <h3 class="font-serif text-lg text-white">Harry Potter</h3>
      <p class="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Half-blood • Stag</p>
      <div class="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-400">
        <span>B. 1980</span>
        <span class="text-green-500 font-bold uppercase">Alive</span>
      </div>
    </div>
  </div>
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

/* Glassmorphism Cards */
.glass-card {
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(212, 175, 55, 0.1);
    transition: all 0.3s ease;
}

.glass-card:hover {
    border-color: rgba(212, 175, 55, 0.4);
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.15);
}
.char-card img {
    transition: transform 0.5s ease;
}
</style>
