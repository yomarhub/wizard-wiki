<template>
  <div class="flex h-screen overflow-hidden">
    <aside class="w-72 border-r border-yellow-900/20 bg-[#0F172A] p-6 flex flex-col h-screen overflow-y-auto sticky top-0">
      <slot name="left-sidebar">
        <AppLeftSidebar class="size-full" />
      </slot>
    </aside>
    <UMain class="flex-1 flex flex-col relative overflow-hidden">
      <slot />
    </UMain>
    <aside v-if="$slots['right-sidebar']" class="w-80 bg-[#0F172A]/80 border-l border-yellow-900/20 hidden xl:flex flex-col backdrop-blur-md">
      <slot name="right-sidebar" />
    </aside>
  </div>
</template>
