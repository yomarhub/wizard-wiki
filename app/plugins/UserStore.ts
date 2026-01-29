import { useUserStore } from '~/stores/users'

export default defineNuxtPlugin(() => {
  const userStore = useUserStore()
  const { data: session, status } = useAuth()

  watch(
    [session, status],
    () => {
      if (status.value === 'authenticated' && session.value?.user) {
        userStore.setFromSessionUser(session.value.user)
      } else if (status.value === 'unauthenticated') {
        userStore.clear()
      }
    },
    { immediate: true }
  )
})
