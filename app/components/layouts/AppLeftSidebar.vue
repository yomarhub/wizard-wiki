<template>
  <div class="flex flex-col h-full">
    <div>
      <slot name="top">
        <div class="flex items-center space-x-3 mb-10">
          <div class="text-yellow-600 text-2xl">⚡</div>
          <h1 class="font-serif text-lg tracking-widest text-yellow-500 uppercase font-bold">Wizard Wiki</h1>
        </div>
      </slot>
    </div>
    <slot name="nav">
      <SidebarBlock title="main-navigation">
        <nav class="flex flex-col">
          <NavButton to="/" icon="🔮">{{ $t('sidebar.category.overview') }}</NavButton>
          <NavButton to="/characters" icon="👥">{{ $t('sidebar.category.characters') }}</NavButton>
          <NavButton to="/spells" icon="🪄">{{ $t('sidebar.category.spells') }}</NavButton>
          <NavButton to="/journal" icon="📜">{{ $t('sidebar.category.daily-prophet') }}</NavButton>
          <NavButton v-if="authStore.isAdmin" to="/dashboard" icon="🏰">{{ $t('sidebar.category.ministry-hub') }}</NavButton>
        </nav>
      </SidebarBlock>
    </slot>
    <div v-if="['/characters', '/spells'].includes(route.path)" class="flex flex-col gap-1.5 mt-6">
      <slot name="middle">
        <SidebarBlock title="filters">
          <CharactersFilters v-if="route.path === '/characters'" />
          <SpellsFilters v-if="route.path === '/spells'" />
        </SidebarBlock>
      </slot>
    </div>
    <div class="mt-auto">
      <slot name="bottom">
        <AuthButton />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore()
const route = useRoute()
</script>

<style scoped></style>
