<template>
  <div>
    <AppHeader />
    <div class="flex flex-row">
      <AppSidebar class="flex-1/4" />
      <UMain class="flex-3/4">
        <slot />
      </UMain>
    </div>
    <USeparator />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
