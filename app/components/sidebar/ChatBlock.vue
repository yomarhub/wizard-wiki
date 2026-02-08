<template>
  <div ref="scrollContainer" class="chat relative flex-1 flex flex-col-reverse overflow-y-scroll p-4 pb-0 space-y-1 scroll-smooth" @scroll="test">
    <div v-if="Math.abs(scrollTop) > 1" class="sticky h-0 bottom-8 m-0 flex justify-end items-center gap-2">
      <UButton icon="i-lucide-chevron-down" class="rounded-full" size="md" color="primary" variant="solid" @click="scrollToBottom" />
    </div>
    <div v-for="m in usermessages" :key="m.id" class="text-secondary"><span>{{ m.user }}: </span>{{ m.message }}</div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '~/utils/types'

const props = defineProps({
  messages: { type: Object as PropType<ChatMessage[]>, required: true }
})
const scrollContainer = ref<HTMLElement | null>(null)
const scrollTop = ref(scrollContainer?.value?.scrollTop ?? 0)
const scrollHeight = ref(scrollContainer?.value?.scrollHeight ?? 0)
const test = (event: Event) => {
  scrollTop.value = (event.target as HTMLElement)?.scrollTop
  scrollHeight.value = (event.target as HTMLElement)?.scrollHeight ?? 0
}

const { $hpAPI } = useNuxtApp()
const users = await $hpAPI.getUsers()
const usermessages = computed(() => {
  return props.messages.map((m) => {
    const user = users.find(u => u.id === m.userId)
    return {
      ...m,
      user: user ? user.username : 'Unknown'
    }
  }).reverse()
})

const scrollToBottom = async () => {
  await nextTick()
  if (scrollContainer?.value) {
    scrollContainer.value.scrollTop = 0
  }
}
</script>
