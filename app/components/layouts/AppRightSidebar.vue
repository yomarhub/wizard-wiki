<template>
  <div class="flex flex-col size-full">
    <ChatBlock :messages />
    <UInput v-model="inputMessage" :placeholder="authStore.isAuthenticated ? t('sidebar.chat.placeholder') : t('sidebar.chat.placeholder-disabled')" :disabled="!authStore.isAuthenticated" size="md" class="p-4" @keypress="send">
      <template #trailing>
        <UTooltip :text="t('sidebar.chat.send-button')" :content="{ side: 'right' }">
          <UButton :disabled="!authStore.isAuthenticated" color="success" variant="link" size="sm" icon="i-lucide-send-horizontal" :aria-label="t('sidebar.chat.aria-label')" @contextmenu.prevent="" @click="send" />
        </UTooltip>
      </template>
    </UInput>
  </div>
</template>

<script setup lang="ts">
const { $hpAPI } = useNuxtApp()
const { t } = useI18n()
const authStore = useAuthStore()

const messages = ref(await $hpAPI.getChatMessages() || [])
const inputMessage = ref('')

const send = (event: KeyboardEvent | MouseEvent) => {
  if (inputMessage.value.trim() === '') return
  if (event instanceof KeyboardEvent && event.key !== 'Enter') return

  // Check if user is authenticated
  if (!authStore.isAuthenticated) {
    alert('Please login to send messages')
    return
  }

  messages.value.push({
    id: messages.value.length,
    userId: authStore.userId || 0,
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
