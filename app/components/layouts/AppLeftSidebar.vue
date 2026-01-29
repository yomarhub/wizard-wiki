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
    <div>
      <slot name="nav">
        <SidebarBlock title="main-navigation">
          <nav class="flex flex-col">
            <NavButton to="/" icon="🔮">{{ $t('sidebar.category.overview') }}</NavButton>
            <NavButton to="/characters" icon="👥">{{ $t('sidebar.category.characters') }}</NavButton>
            <NavButton to="/spells" icon="🪄">{{ $t('sidebar.category.spells') }}</NavButton>
            <NavButton to="/articles" icon="📜">{{ $t('sidebar.category.daily-prophet') }}</NavButton>
            <NavButton to="/dashboard" icon="🏰">{{ $t('sidebar.category.ministry-hub') }}</NavButton>
          </nav>
        </SidebarBlock>
      </slot>
    </div>
    <div>
      <slot name="middle">
        Some middle content
      </slot>
    </div>
    <div class="mt-auto">
      <slot name="bottom">
        <div><AuthButton /><span>Login</span></div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
