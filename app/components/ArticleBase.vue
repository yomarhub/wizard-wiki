<template>
  <li>
    <NuxtLink :to="`/article/${article.slug}`" class="no-underline">
      <article class="bg-primary-100 p-6 rounded-lg shadow-md mb-6">
        <h2 class="text-2xl font-bold mb-2 dark:text-inverted">
          {{ article.title }}
        </h2>
        <p class="dark:text-inverted">
          {{ article.text }}
        </p>
      </article>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import type { Article } from '~/datas/articles'

defineProps<{ article: Article }>()
</script>
