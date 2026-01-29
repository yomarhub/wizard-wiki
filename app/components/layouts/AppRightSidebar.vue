<template>
  <div class="flex flex-col size-full">
    <ChatBlock :messages />
    <UInput v-model="inputMessage" :placeholder="t('sidebar.chat.placeholder')" size="md" class="p-4" @keypress="send">
      <template #trailing>
        <UTooltip :text="t('sidebar.chat.send-button')" :content="{ side: 'right' }">
          <UButton color="success" variant="link" size="sm" icon="i-lucide-send-horizontal" :aria-label="t('sidebar.chat.aria-label')" @contextmenu.prevent="" @click="send" />
        </UTooltip>
      </template>
    </UInput>
  </div>
</template>

<script setup lang="ts">
const { $hpAPI } = useNuxtApp()
const { t } = useI18n()
const messages = ref(await $hpAPI.getChatMessages() || [])

for (let i = messages.value.length; i < 50; i++) messages.value.push({ id: messages.value.length, userId: 0, message: 'Join the Ministry of Magic community today!' })
const inputMessage = ref('')
const send = (event: KeyboardEvent | MouseEvent) => {
  if (inputMessage.value.trim() === '') return
  if (event instanceof KeyboardEvent && event.key !== 'Enter') return
  messages.value.push({
    id: messages.value.length,
    userId: 0,
    message: inputMessage.value
  })
  inputMessage.value = ''
}
</script>

<style scoped>
.chat {
  overflow-anchor: auto;
}
</style>
