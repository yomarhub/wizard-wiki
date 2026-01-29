<template>
  <section class="flex flex-col p-3 bg-orange-400 text-purple-600">
    <!-- Old Input Has Image -->
    <!-- <input id="bHasImage" class="size-3.5" type="checkbox" name="hasImage" /> -->
    <!-- <label for="hasImage" class="pl-2">Filter Images</label> -->
    <!-- End Old Filter Has Image -->

    <template v-for="field in fields" :key="field">
      <UCheckbox v-if="isBooleanArray(values[field]) || isButton(field)" v-model="filters[field] as boolean" class="ml-4" :label="`Select if ${capitalize(field)}`" />
      <UInput v-else-if="isInput(field)" v-model="filters[field] as AcceptableValue" class="ml-4" :placeholder="values[field] ? values[field][0] as string : capitalize(field)" />
      <USelect v-else-if="isValid(field)" v-model="filters[field]" class="ml-4" :items="(values as never)[field]" :placeholder="`Select ${field}`" />
    </template>
    <UButton class="mt-4 bg-red-500 text-white" @click="clearFilters()">Clear Filters</UButton>
  </section>
</template>

<script setup lang="ts">
import type { AcceptableValue } from '@nuxt/ui'
import values from '~/datas/charactersValues'

const { filters, clearFilters } = useCharacterFilter() as unknown as { filters: Record<string, unknown>, clearFilters: () => void }

const fields = Object.keys(values) as Array<keyof typeof values>
const isBooleanArray = (arr: unknown[] | undefined): boolean => Array.isArray(arr) && arr.every(v => typeof v === 'boolean')
const isIgnored = (field: string): boolean => [''].includes(field)
const isInput = (field: string): boolean => ['name', 'alternate_names'].includes(field)
const isButton = (field: string): boolean => ['image'].includes(field)
const isValid = (field: string): boolean => !isIgnored(field) && Array.isArray(values[field]) && values[field].length > 0
const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1)
</script>
