<template>
  <div class="spell-glow bg-slate-900/50 border border-slate-800 p-6 rounded-2xl transition-all">
    <h3 class="incantation font-serif text-xl mb-2 italic">{{ spell?.name }}</h3>
    <p class="text-xs text-slate-400 leading-relaxed">{{ spell.description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Spell } from '~/utils/types'

defineProps({
  spell: { type: Object as PropType<Spell>, required: true }
})
</script>

<style scoped>
.spell-glow:hover {
  border-color: rgba(212, 165, 116, 0.4);
  box-shadow: 0 0 20px rgba(212, 165, 116, 0.15);
}

.incantation {
  color: #d4a574;
}

.spell-glow:hover {
  box-shadow: 0 0 15px rgba(56, 189, 248, 0.2);
  border-color: #38bdf8;
}

.incantation {
  color: #38bdf8;
  text-shadow: 0 0 10px rgba(56, 189, 248, 0.3);
}

.unforgivable {
  border-color: #ef4444 !important;
}

.unforgivable:hover {
  box-shadow: 0 0 15px rgba(239, 68, 68, 0.4);
}
</style>
