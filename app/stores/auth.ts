import { users } from '~/datas/users'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null
  }),

  getters: {
    currentUser: state => state.user,
    isAdmin: state => state.user?.role === 'ADMIN',
    userId: state => state.user?.id,
    isAuthenticated: state => state.user !== null
  },

  actions: {
    async login(email: string, password: string) {
      // Find user in mock data
      const foundUser = users.find(u => u.email === email && u.password === password)
      if (!foundUser) {
        throw new Error('Invalid email or password')
      }

      const { password: _, ...user } = foundUser
      const cookie = useCookie<User | null>('user', { watch: true })
      cookie.value = user

      this.user = cookie.value

      return cookie.value
    },

    logout() {
      this.user = null

      useCookie('user').value = null
    },

    init() {
      const cookie = useCookie<User | null>('user', { default: () => null, watch: true })
      this.user = cookie.value
    }
  }
})
