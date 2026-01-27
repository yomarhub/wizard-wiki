<template>
  <form class="h-[75vh] aspect-3/4 flex flex-col gap-2 size-full" novalidate @submit.prevent="onSubmit">
    <input v-model="username" type="text">
    <span v-if="usernameError && meta.touched">
      {{ usernameError }}
    </span>
    <input v-model="email" type="text">
    <span v-if="emailError && meta.touched">
      {{ emailError }}
    </span>
    <input v-model="password" type="password">
    <span v-if="passwordError && meta.touched">
      {{ passwordError }}
    </span>
    <!-- <input type="submit" value="Login"> -->
    <NextPage />
  </form>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'empty'
})

const { handleSubmit/* , setErrors */, meta } = useForm({
  initialValues: {
    username: '',
    email: '',
    password: ''
  }
})

const { value: username, errorMessage: usernameError } = useField('username', 'required', { label: 'Username' })
const { value: email, errorMessage: emailError } = useField('email', 'required|email', { label: 'Email Address' })
const { value: password, errorMessage: passwordError } = useField('password', 'required', { label: 'Password' })

const onSubmit = handleSubmit((values) => {
  console.log('Form Submitted:', values)
  console.log('Values from useField:', {
    username: username.value,
    email: email.value,
    password: password.value
  })
})
</script>

<style scoped></style>
