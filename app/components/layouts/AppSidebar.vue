<template>
  <section class="flex flex-col p-3 bg-orange-400 text-purple-600">
    <input id="bHasImage" v-model="hasImage" class="size-3.5" type="checkbox" name="hasImage" />
    <label for="hasImage" class="pl-2">Filter Images</label>
    <template v-for="field in fields" :key="field">
      <UToggle v-if="!Array.isArray(values[field]) && values[field] === 'isBoolean'" class="ml-4" :label="'Select Character ' + field" />
      <USelect v-else class="ml-4" :items="(values as never)[field]" value-key="value" :placeholder="'Select Character ' + field" />
    </template>
    <!-- <select v-for="field in fields" :key="field" class="ml-4" :placeholder="'Select Character ' + field">
      <option :value="field" selected disabled hidden>{{ 'Select Character ' + field }}</option>
      <option v-for="item in values[field]" :key="item" :value="item">{{ item }}</option>
    </select> -->
  </section>
</template>

<script setup lang="ts">
import values from '~/datas/charactersValues'

const { hasImage } = useCharacterFilter()
const { data } = await useCharacters()

const fields = computed(() => (data.value[0] ? Object.keys(data.value[0]).slice(1) : []))
</script>

<style scoped></style>
