<template>
  <form class="w-full max-w-md p-8 bg-[#0F172A] border border-yellow-900/30 rounded-2xl shadow-2xl" novalidate @submit.prevent="onSubmit">
    <div class="text-center mb-8">
      <div class="w-16 h-16 bg-yellow-600/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-600/50">
        <span class="text-2xl">🪄</span>
      </div>
      <h1 class="text-2xl font-serif text-yellow-500">{{ t('login.title') }}</h1>
      <p class="text-sm text-slate-500 mt-1">{{ t('login.subtitle') }}</p>
    </div>

    <div class="space-y-4">
      <UAlert v-if="loginError" color="error" variant="soft" title="Authentication Failed" :description="loginError" class="mb-4" />

      <div>
        <label class="block text-xs font-bold text-slate-500 uppercase mb-1">{{ t('login.email') }}</label>
        <input v-model="email" type="email" placeholder="harry.potter@hogwarts.edu" class="w-full bg-slate-800 border rounded-lg px-4 py-3 text-secondary focus:border-yellow-600 outline-none" :class="emailError && meta.touched ? 'border-red-500' : 'border-slate-700'">
        <span v-if="emailError && meta.touched" class="text-xs text-red-400 mt-1 block">
          {{ emailError }}
        </span>
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-500 uppercase mb-1">{{ t('login.password') }}</label>
        <input v-model="password" type="password" placeholder="easypassword" class="w-full bg-slate-800 border rounded-lg px-4 py-3 text-secondary focus:border-yellow-600 outline-none" :class="passwordError && meta.touched ? 'border-red-500' : 'border-slate-700'">
        <span v-if="passwordError && meta.touched" class="text-xs text-red-400 mt-1 block">
          {{ passwordError }}
        </span>
      </div>
      <button type="submit" :disabled="isLoading" class="w-full bg-yellow-600 hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-3 rounded-lg transition-all shadow-lg shadow-yellow-600/20">
        {{ isLoading ? t('login.button.connecting') : t('login.button.enter') }}
      </button>
    </div>
    <p class="text-center mt-6 text-xs text-slate-600">{{ t('login.forgot.0') }} <a href="#" class="text-yellow-700 underline">{{ t('login.forgot.1') }}</a></p>
  </form>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'empty'
})
const { t } = useI18n()
const authStore = useAuthStore()

// email: 'harry.potter@hogwarts.edu', username: 'HarryP', password: 'easypassword'
const { handleSubmit, meta } = useForm({
  // initialValues: {
  //   email: 'harry.potter@hogwarts.edu',
  //   password: 'easypassword'
  // }
  initialValues: {
    email: '',
    password: ''
  }
})

const { value: email, errorMessage: emailError } = useField('email', 'required|email', { label: 'Email Address' })
const { value: password, errorMessage: passwordError } = useField('password', 'required', { label: 'Password' })

const loginError = ref<string | null>(null)
const isLoading = ref(false)

const onSubmit = handleSubmit(async (values) => {
  // Prevent double submission
  if (isLoading.value) return

  loginError.value = null
  isLoading.value = true

  try {
    await authStore.login(values.email, values.password)
    const random = (n = 500) => 1000 + n * Math.random() - n / 2
    await new Promise(resolve => setTimeout(resolve, random())) // Simulate network delay
    await navigateTo('/')
  } catch (error) {
    loginError.value = error instanceof Error ? error.message : t('login.error.invalid')
  } finally {
    isLoading.value = false
  }
})
</script>

<style scoped></style>
