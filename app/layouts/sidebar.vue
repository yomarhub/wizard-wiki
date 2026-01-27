<template>
  <div>
    <AppHeader />
    <div class="flex flex-row">
      <aside class="w-64 shrink-0">
        <slot name="sidebar">
          <AppSidebar class="size-full" />
        </slot>
      </aside>
      <USeparator class="h-auto pl-1" size="lg" orientation="vertical" />
      <UMain class="flex-1">
        <slot />
      </UMain>
    </div>
    <USeparator />
    <AppFooter />
  </div>
</template>
