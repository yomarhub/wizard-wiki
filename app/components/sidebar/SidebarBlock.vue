<template>
  <div class="">
    <p class="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-4 ml-2">
      {{ iTitle }}
    </p>
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true }
})

const iTitle = useI18n().t(`sidebar.category.${props.title}`)
</script>
