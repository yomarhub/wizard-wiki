<template>
  <UInput id="chat-input" v-model="inputMessage" :placeholder :disabled size="md" class="p-4" @keydown.enter="send">
    <template #trailing>
      <UTooltip :text="t('sidebar.chat.send-button')" :content="{ side: 'right' }">
        <UButton :disabled color="success" variant="link" size="sm" icon="i-lucide-send-horizontal" :aria-label="t('sidebar.chat.aria-label')" @contextmenu.prevent @click="send" />
      </UTooltip>
    </template>
  </UInput>
</template>

<script setup lang="ts">
const { t } = useI18n()
defineProps({ messages: { type: Object as PropType<ChatMessage[]>, required: true } })

const { userId, isAuthenticated } = storeToRefs(useAuthStore())

const placeholder = computed(() => isAuthenticated.value ? t('sidebar.chat.placeholder') : t('sidebar.chat.placeholder-disabled'))
const disabled = computed(() => !isAuthenticated.value)

const inputMessage = ref('')
const emit = defineEmits<{
  sendMessage: [message: Partial<ChatMessage>]
}>()

// eslint-disable-next-line @stylistic/max-statements-per-line
const clear = () => { inputMessage.value = '' }
const send = (event: KeyboardEvent | MouseEvent) => {
  if (inputMessage.value.trim() === '') return
  if (event instanceof KeyboardEvent && event.key !== 'Enter') return

  // Check if user is authenticated
  if (!isAuthenticated.value) {
    alert('Please login to send messages')
    return
  }

  emit('sendMessage', {
    userId: userId.value,
    message: inputMessage.value
  })
  clear()
  document.getElementById('chat-input')?.focus()
}
</script>
