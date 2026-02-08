<template>
  <div class="flex flex-col size-full">
    <ChatBlock :messages />
    <ChatInput :messages @send-message="send" />
  </div>
</template>

<script setup lang="ts">
const { $hpAPI } = useNuxtApp()

const { data: messages } = useLazyAsyncData('chat-messages', () => $hpAPI.getChatMessages() || [], { deep: true, default: (): ChatMessage[] => [] })
const send = async (message: Partial<ChatMessage>) => {
  messages.value.push({
    id: Math.max(...messages.value.map(m => m.id)) + 1,
    userId: message.userId || 0,
    message: message.message || ''
  })
}
</script>
