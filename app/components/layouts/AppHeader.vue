<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/" class="flex items-center"><AppLogo /></NuxtLink>
      <NuxtLink to="/" class="ml-4 text-lg font-semibold">Harry Potter Wiki</NuxtLink>
      <HeaderButton to="/articles" label="Actualites" />
      <HeaderButton to="/characters" label="Characters" />
    </template>

    <template #right>
      <HeaderButton to="/login" label="Login" />
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
