<template>
  <div class="flex flex-col p-10">
    <NextPage />
    <ul>
      <ArticleBase v-for="article in articles" :key="article.id" :article="article" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import articles from '~/datas/articles'

definePageMeta({
  layout: 'sidebar-chat'
})
</script>
