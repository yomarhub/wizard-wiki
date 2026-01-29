import { defineRule, ErrorMessage, Field, FieldArray, Form } from 'vee-validate'
import { email, required } from '@vee-validate/rules'

defineRule('required', required)
defineRule('email', email)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VeeForm', Form)
  nuxtApp.vueApp.component('VeeField', Field)
  nuxtApp.vueApp.component('VeeFieldArray', FieldArray)
  nuxtApp.vueApp.component('VeeErrorMessage', ErrorMessage)
})
