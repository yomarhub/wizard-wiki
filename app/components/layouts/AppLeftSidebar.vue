<template>
  <div class="flex flex-col h-full">
    <div>
      <slot name="top">
        <p>⚡ Wizard Wiki</p>
      </slot>
    </div>
    <div>
      <slot name="nav">
        <nav class="flex flex-col">
          <NavButton to="/" icon="🔮">Overview</NavButton>
          <NavButton to="/characters" icon="👥">Characters</NavButton>
          <NavButton to="/spells" icon="🪄">Spells</NavButton>
          <NavButton to="/articles" icon="📜">Daily Prophet</NavButton>
          <NavButton to="/ministry-hub" icon="🏰">Ministry Hub</NavButton>
        </nav>
      </slot>
    </div>
    <div>
      <slot name="middle">
        Some middle content
      </slot>
    </div>
    <div class="mt-auto">
      <slot name="bottom">
        Some bottom content
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
