<template>
  <div class="w-full min-h-screen bg-linear-to-b from-slate-900 to-slate-800 py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-8">
        <div class="w-16 h-16 bg-yellow-600/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-600/50">
          <UIcon name="i-lucide-scroll-text" class="text-3xl text-yellow-500" />
        </div>
        <h1 class="text-3xl font-serif text-yellow-500 mb-2">Create New Article</h1>
        <p class="text-slate-400">Share your magical knowledge with the wizarding world</p>
      </div>

      <form class="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm" @submit.prevent="onSubmit">
        <UAlert v-if="error" color="error" variant="soft" title="Error" :description="error" class="mb-6" />
        <UAlert v-if="success" color="success" variant="soft" title="Success!" description="Your article has been created successfully." class="mb-6" />

        <div class="space-y-6">
          <ArticleField icon="i-lucide-heading" :label="$t('article.form.title')">
            <UInput v-model="title" size="lg" :placeholder="$t('article.form.title-placeholder')" :class="['w-full', titleError && meta.touched ? 'ring-2 ring-red-500' : '']" />
            <span v-if="titleError && meta.touched" class="text-xs text-red-400 mt-1 block">
              {{ titleError }}
            </span>
          </ArticleField>

          <ArticleField icon="i-lucide-image" :label="$t('article.form.cover-label')">
            <div v-if="imagePreview" class="mb-4 relative group">
              <img :src="imagePreview" alt="Preview" class="w-full h-64 object-cover rounded-lg border border-slate-700">
              <button type="button" class="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" @click="removeImage">
                <UIcon name="i-lucide-x" />
              </button>
            </div>

            <div v-if="!imagePreview" class="border-2 border-dashed border-slate-700 rounded-lg p-8 text-center hover:border-yellow-600/50 transition-colors cursor-pointer" @click="triggerFileInput">
              <UIcon name="i-lucide-upload" class="text-4xl text-slate-500 mb-2 mx-auto block" />
              <p class="text-slate-400 mb-1">Click to upload or drag and drop</p>
              <p class="text-xs text-slate-600">PNG, JPG, GIF up to 5MB</p>
              <input ref="fileInput" type="file" accept="image/*" class="hidden" @change="handleImageUpload">
            </div>
            <span v-if="imageError && meta.touched" class="text-xs text-red-400 mt-1 block">
              {{ imageError }}
            </span>
          </ArticleField>

          <ArticleField icon="i-lucide-file-text" :label="$t('article.form.content-label')">
            <UTextarea v-model="body" :rows="12" placeholder="Write your article content here... Share your insights, discoveries, or magical tales..." :class="['w-full', bodyError && meta.touched ? 'ring-2 ring-red-500' : '']" />
            <span v-if="bodyError && meta.touched" class="text-xs text-red-400 mt-1 block">
              {{ bodyError }}
            </span>
            <p class="text-xs text-slate-500 mt-1">{{ $t('article.form.characters-count', body.length) }}</p>
          </ArticleField>

          <div class="flex gap-4">
            <UButton type="submit" color="primary" size="lg" :loading="isSubmitting" :disabled="isSubmitting">
              <UIcon name="i-lucide-send" class="mr-2" />
              {{ isSubmitting ? $t('article.form.submit.is-submitting') : $t('article.form.submit.publish') }}
            </UButton>

            <UButton type="button" color="neutral" variant="soft" size="lg" :disabled="isSubmitting" @click="navigateTo('/articles')">
              <UIcon name="i-lucide-x" class="mr-2" />
              Cancel
            </UButton>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
// Form validation
const { handleSubmit, meta } = useForm({
  initialValues: {
    title: '',
    body: '',
    image: ''
  }
})

const { value: title, errorMessage: titleError } = useField<string>('title', 'required|min:3|max:200', { label: 'Title' })
const { value: body, errorMessage: bodyError } = useField<string>('body', 'required|min:50', { label: 'Body' })
const { value: image, errorMessage: imageError } = useField<string>('image', '', { label: 'Image' })

const fileInput = ref<HTMLInputElement>()
const imagePreview = ref<string | null>(null)
const error = ref<string | null>(null)
const success = ref(false)
const isSubmitting = ref(false)

// Trigger file input
const triggerFileInput = () => {
  fileInput.value?.click()
}

// Handle image upload
const handleImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files

  if (!files || !files[0]) return
  const file = files[0]

  // Validate file type
  if (!file.type.startsWith('image/')) {
    error.value = 'Please select a valid image file'
    return
  }

  // Validate file size (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    error.value = 'Image size must be less than 5MB'
    return
  }

  // Create preview
  const reader = new FileReader()
  reader.onload = (e) => {
    imagePreview.value = e.target?.result as string
    image.value = e.target?.result as string
    error.value = null
  }
  reader.readAsDataURL(file)
}

// Remove image
const removeImage = () => {
  imagePreview.value = null
  image.value = ''
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

// Submit form
const onSubmit = handleSubmit(async (values) => {
  error.value = null
  success.value = false
  isSubmitting.value = true

  try {
    await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate API call

    console.log('Article data:', {
      title: values.title,
      body: values.body,
      image: values.image ? 'Image uploaded' : 'No image'
    })

    success.value = true

    // Redirect after success
    setTimeout(() => {
      navigateTo('/articles')
    }, 2000)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to create article. Please try again.'
  } finally {
    isSubmitting.value = false
  }
})
</script>

<style scoped>
/* Smooth transitions */
input,
textarea {
  transition: all 0.2s ease;
}

/* Scrollbar styling for textarea */
textarea::-webkit-scrollbar {
  width: 8px;
}

textarea::-webkit-scrollbar-track {
  background: rgb(15 23 42 / 0.5);
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb {
  background: rgb(71 85 105);
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: rgb(100 116 139);
}
</style>
