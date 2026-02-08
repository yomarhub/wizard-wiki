<template>
  <UInput v-model="inputMessage" :placeholder :disabled size="md" class="p-4">
    <template #trailing>
      <UTooltip :text="t('sidebar.chat.send-button')" :content="{ side: 'right' }">
        <UButton :disabled color="success" variant="link" size="sm" icon="i-lucide-send-horizontal" :aria-label="t('sidebar.chat.aria-label')" @contextmenu.prevent="" @click="send" />
      </UTooltip>
    </template>
  </UInput>
</template>

<script setup lang="ts">
const { t } = useI18n()
defineProps({ messages: { type: Object as PropType<ChatMessage[]>, required: true } })

const authStore = useAuthStore()
const { userId, isAuthenticated } = authStore

const placeholder = ref(t('common.loading'))
const disabled = ref(true)
onMounted(() => {
  placeholder.value = isAuthenticated ? t('sidebar.chat.placeholder') : t('sidebar.chat.placeholder-disabled')
  disabled.value = !isAuthenticated
})

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
  if (!isAuthenticated) {
    alert('Please login to send messages')
    return
  }

  emit('sendMessage', {
    userId: userId,
    message: inputMessage.value
  })
  clear()
}
</script>
