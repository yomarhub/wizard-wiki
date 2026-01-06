<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/" class="flex items-center">
        <AppLogo />
      </NuxtLink>
    </template>

    <template #right>
      <UColorModeButton />

      <UButton
        to="https://github.com/yomarhub"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UHeader>
</template>
