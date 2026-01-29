<template>
  <NuxtLink :to="to" :class="['ml-4 text-lg font-semibold transition-colors', route.path === to ? 'text-yellow-300' : 'text-primary-400 hover:text-yellow-400']">
    <span class="icon">{{ icon }}</span>
    <span>
      <slot />
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
const route = useRoute()
defineProps({
  to: { type: String, required: true },
  icon: { type: String, required: true }
})
</script>
