import { defineRule, ErrorMessage, Field, FieldArray, Form } from 'vee-validate'
import { alpha_spaces, confirmed, email, max, min, not_one_of, required } from '@vee-validate/rules'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)
defineRule('alpha_spaces', alpha_spaces)
defineRule('confirmed', confirmed)
defineRule('not_one_of', not_one_of)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VeeForm', Form)
  nuxtApp.vueApp.component('VeeField', Field)
  nuxtApp.vueApp.component('VeeFieldArray', FieldArray)
  nuxtApp.vueApp.component('VeeErrorMessage', ErrorMessage)
})
