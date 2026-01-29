export default defineNuxtPlugin(() => {
  const authStore = useAuthStore()

  // Restore session on app initialization
  if (import.meta.client) {
    authStore.restoreSession()
  }
})
