<template>
  <div>
    <label class="block text-sm font-bold text-slate-300 uppercase mb-2">
      <UIcon :name="icon" class="mr-2" />
      {{ label }}
    </label>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: { type: String, required: true },
  label: { type: String, required: true }
})
</script>
