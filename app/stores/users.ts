import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    hydratedFromSession: false
  }),
  getters: {
    isAuthenticated: state => Boolean(state.user?.id || state.user?.email),
    isAdmin: state => state.user?.role === 'ADMIN'
  },
  actions: {
    setFromUser(User: unknown) {
      const u = (User ?? null) as User | null
      this.user = u
      this.hydratedFromSession = true
    },
    clear() {
      this.user = null
      this.hydratedFromSession = true
    }
  }
})
