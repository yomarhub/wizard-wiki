<template>
  <div class="text-center p-10">
    <img class="block w-2/3 my-5 mx-auto" src="/logo.png" alt="Logo" />
    <h1>{{ $t('index.welcome') }}</h1>
    <p>This is the main landing page of the application.</p>
    <NextPage />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>

<style scoped></style>
