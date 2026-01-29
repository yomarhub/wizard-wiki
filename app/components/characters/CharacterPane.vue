<template>
  <div class="char-card bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300">
    <div class="h-64 overflow-hidden relative group">
      <img v-if="character?.image" :src="character.image" :alt="character.name" class="w-full h-full object-cover">
      <div v-else class="w-full h-full bg-slate-800 flex items-center justify-center text-6xl">👤</div>
      <div class="absolute inset-0 bg-linear-to-t from-[#0B101B] to-transparent"></div>
      <span v-if="character?.house" class="absolute bottom-3 left-3 text-[10px] font-bold uppercase px-2 py-1 border rounded" :class="houseStyles">{{ character.house }}</span>
    </div>
    <div class="p-4">
      <h3 class="font-serif text-lg text-white">{{ character?.name || 'Unknown' }}</h3>
      <p class="text-[10px] text-slate-500 uppercase tracking-widest mt-1">{{ character?.ancestry || 'Unknown' }} {{ character?.patronus ? `• ${character.patronus}` : '' }}</p>
      <div class="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-400">
        <span>{{ character?.yearOfBirth ? `B. ${character.yearOfBirth}` : 'Unknown' }}</span>
        <span v-if="character?.alive !== undefined" :class="character.alive ? 'text-green-500' : 'text-red-500'" class="font-bold uppercase">{{ character.alive ? 'Alive' : 'Deceased' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Character } from '~/utils/types'

const props = defineProps({
  character: { type: Object as PropType<Character>, required: true }
})

const houseStyles = computed(() => {
  const house = props.character?.house?.toLowerCase()
  if (house === 'gryffindor') return 'text-red-500 bg-red-900/20 border-red-900/30'
  if (house === 'slytherin') return 'text-green-500 bg-green-900/20 border-green-900/30'
  if (house === 'ravenclaw') return 'text-blue-500 bg-blue-900/20 border-blue-900/30'
  if (house === 'hufflepuff') return 'text-yellow-500 bg-yellow-900/20 border-yellow-900/30'
  return 'text-slate-500 bg-slate-900/20 border-slate-900/30'
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

.house-gryffindor {
  border-color: #740001;
  color: #ae0001;
}

.house-slytherin {
  border-color: #1a472a;
  color: #2a623d;
}

.house-ravenclaw {
  border-color: #0e1a40;
  color: #222f5b;
}

.house-hufflepuff {
  border-color: #ecb939;
  color: #f0c75e;
}

.char-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -10px rgba(212, 175, 55, 0.3);
}
</style>
