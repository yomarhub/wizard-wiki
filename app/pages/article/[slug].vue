<template>
  <article v-if="article">
    <h1>{{ article.title }}</h1>
    <p>{{ article.text }}</p>
  </article>
  <p v-else class="text-error">Article not found.</p>
</template>

<script setup lang="ts">
import type { Article } from '~/datas/articles'

const slug = useRouter().currentRoute.value.params.slug as string
const articles = await import('~/datas/articles').then(m => m.default)
const article: Article | undefined = articles.find(a => a.slug.toString() === slug)
</script>
