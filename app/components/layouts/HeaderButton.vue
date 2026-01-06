<template>
  <NuxtLink :to="to" class="ml-6 text-md font-medium hover:underline underline-offset-4">{{ label }}</NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ to: string, label: string }>()
</script>
