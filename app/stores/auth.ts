import { users } from '~/datas/users'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    isAuthenticated: false
  }),

  getters: {
    currentUser: state => state.user,
    isAdmin: state => state.user?.role === 'ADMIN',
    userId: state => state.user?.id
  },

  actions: {
    async login(email: string, password: string) {
      // Find user in mock data
      const user = users.find(u => u.email === email && u.password === password)

      if (!user) {
        throw new Error('Invalid email or password')
      }

      // Set user state
      this.user = user
      this.isAuthenticated = true

      // Store in localStorage for persistence
      if (import.meta.client) {
        localStorage.setItem('auth_user', JSON.stringify(user))
      }

      return user
    },

    logout() {
      this.user = null
      this.isAuthenticated = false

      // Clear localStorage
      if (import.meta.client) {
        localStorage.removeItem('auth_user')
      }
    },

    // Restore session from localStorage
    restoreSession() {
      if (import.meta.client) {
        const storedUser = localStorage.getItem('auth_user')
        if (storedUser) {
          try {
            this.user = JSON.parse(storedUser)
            this.isAuthenticated = true
          } catch (e) {
            console.error('Failed to restore session:', e)
            localStorage.removeItem('auth_user')
          }
        }
      }
    }
  }
})
