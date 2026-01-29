<template>
  <div ref="scrollContainer" class="chat flex-1 overflow-y-scroll p-4 pb-0 space-y-1 scroll-smooth">
    <div v-for="m in usermessages" :key="m.id" class="text-secondary"><span>{{ m.user }}: </span>{{ m.message }}</div>
    <div class="sticky bottom-0 flex justify-end">
      <UButton v-if="scrollContainer?.scrollTop !== scrollContainer?.scrollHeight" icon="i-lucide-chevron-down" class="rounded-full" size="md" color="primary" variant="solid" @click="scrollToBottom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '~/utils/types'

const props = defineProps({
  messages: { type: Object as PropType<ChatMessage[]>, required: true }
})

const scrollContainer = ref<HTMLElement | null>(null)

const { $hpAPI } = useNuxtApp()
const users = await $hpAPI.getUsers()
const usermessages = computed(() => {
  return props.messages.map((m) => {
    const user = users.find(u => u.id === m.userId)
    return {
      ...m,
      user: user ? user.username : 'Unknown'
    }
  })
})

const scrollToBottom = async () => {
  await nextTick()
  if (scrollContainer?.value) {
    scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight
  }
}
watch(usermessages, () => {
  scrollToBottom()
}, { deep: true })

onMounted(() => {
  scrollToBottom()
})
</script>
