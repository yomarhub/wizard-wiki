<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { locale, locales: availableLocales, setLocale } = useI18n()

// Filter to only show supported locales from i18n config
const supportedLocaleCodes = availableLocales.value.map((l: { code: string }) => l.code)
const filteredLocales = Object.values(locales).filter((l: { code: string }) => supportedLocaleCodes.includes(l.code))
</script>

<template>
  <ULocaleSelect :model-value="locale" :locales="filteredLocales" variant="none" :ui="{ value: 'hidden', content: 'min-w-fit' }" @update:model-value="setLocale($event as any)" />
</template>
