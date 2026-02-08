<template>
  <NuxtLayout name="default">
    <template #sidebar>
      <div class="border-t border-yellow-900/10 pt-8 space-y-6 mb-6">
        <div>
          <p class="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-4 ml-2">Ministry Status</p>
          <div class="px-4 py-3 bg-slate-900/50 border border-yellow-600/20 rounded-xl">
            <p class="text-[10px] text-yellow-500 font-bold uppercase tracking-widest">Level 1 Alert</p>
            <p class="text-[9px] text-slate-400 mt-1">All magical ports are monitored.</p>
          </div>
        </div>
      </div>
    </template>

    <main class="flex-1 p-12 z-10 bg-gray-700">
      <header class="flex justify-between items-center mb-12">
        <div>
          <h1 class="text-3xl font-serif text-white">Editorial Desk</h1>
          <p class="text-slate-500 text-sm mt-1">Manage, validate, and publish wizarding news.</p>
        </div>
        <UButton color="primary" size="lg" @click="createArticle">
          Create New Article
        </UButton>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 bg-[#0F172A] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div class="p-6 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
            <h3 class="text-sm font-bold uppercase tracking-widest text-slate-400">Pending Validation</h3>
            <span class="text-xs bg-yellow-600/10 text-yellow-600 px-3 py-1 rounded-full font-bold">{{ pendingArticles.length }} Waiting</span>
          </div>
          <table class="w-full text-left">
            <thead class="bg-slate-900 text-[10px] text-slate-500 uppercase tracking-[0.2em]">
              <tr>
                <th class="px-8 py-4">Title & Author</th>
                <th class="px-8 py-4">Category</th>
                <th class="px-8 py-4">Status</th>
                <th class="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800 text-sm">
              <tr v-for="article in pendingArticles" :key="article.id" class="hover:bg-slate-800/30 transition">
                <td class="px-8 py-6">
                  <p class="font-bold text-slate-200">{{ article.title }}</p>
                  <p class="text-xs text-slate-500 italic">By {{ article.author }}</p>
                </td>
                <td class="px-8 py-6">
                  <span class="text-xs px-2 py-0.5 rounded border font-bold" :class="getCategoryStyle(article.category)">{{ article.category }}</span>
                </td>
                <td class="px-8 py-6">
                  <span class="flex items-center space-x-2">
                    <span class="w-2 h-2 rounded-full bg-yellow-600 animate-pulse"></span>
                    <span class="text-xs text-yellow-600 font-bold">{{ article.status }}</span>
                  </span>
                </td>
                <td class="px-8 py-6 text-right space-x-2">
                  <button class="p-2 hover:bg-green-600/10 text-green-500 transition rounded-lg" @click="approveArticle(article.id)">✔</button>
                  <button class="p-2 hover:bg-red-600/10 text-red-500 transition rounded-lg" @click="rejectArticle(article.id)">✖</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="space-y-6">
          <div class="bg-gradient-to-br from-[#0F172A] to-[#0B101B] border border-yellow-900/20 p-8 rounded-3xl">
            <h3 class="font-serif text-lg text-yellow-500 mb-4 tracking-tighter uppercase">Contributor Stats</h3>
            <div class="space-y-6">
              <div class="flex justify-between items-end border-b border-slate-800 pb-2">
                <span class="text-xs text-slate-500">Total Published</span>
                <span class="text-2xl font-serif">{{ stats.totalPublished }}</span>
              </div>
              <div class="flex justify-between items-end border-b border-slate-800 pb-2">
                <span class="text-xs text-slate-500">Draft Status</span>
                <span class="text-xs font-bold text-yellow-600 uppercase">{{ stats.pending }} Pending</span>
              </div>
            </div>
            <div class="mt-8 bg-slate-900 rounded-2xl p-4 border border-slate-800">
              <p class="text-[10px] text-slate-500 font-bold uppercase mb-2">Editor's Tip</p>
              <p class="text-xs italic text-slate-400">"Articles with images receive 3x more engagement from the community."</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: 'auth'
})

const pendingArticles = ref([
  {
    id: 1,
    title: 'The Origins of Horcruxes',
    author: 'Tom_Riddl3',
    category: 'Dark Arts',
    status: 'Reviewing'
  },
  {
    id: 2,
    title: 'Advanced Patronus Techniques',
    author: 'RemusL',
    category: 'Defense',
    status: 'Reviewing'
  },
  {
    id: 3,
    title: 'Herbology: Rare Magical Plants',
    author: 'NevilleL',
    category: 'Nature',
    status: 'Reviewing'
  },
  {
    id: 4,
    title: 'Quidditch Strategy Guide',
    author: 'OliverW',
    category: 'Sports',
    status: 'Reviewing'
  }
])

const stats = ref({
  totalPublished: 14,
  pending: 3
})

const getCategoryStyle = (category: string) => {
  const styles: Record<string, string> = {
    'Dark Arts': 'bg-red-900/20 text-red-500 border-red-900/30',
    'Defense': 'bg-blue-900/20 text-blue-500 border-blue-900/30',
    'Nature': 'bg-green-900/20 text-green-500 border-green-900/30',
    'Sports': 'bg-yellow-900/20 text-yellow-500 border-yellow-900/30'
  }
  return styles[category] || 'bg-slate-900/20 text-slate-500 border-slate-900/30'
}

const createArticle = () => {
  navigateTo('/articles/new')
}

const approveArticle = (id: number) => {
  console.log('Approved article:', id)
  pendingArticles.value = pendingArticles.value.filter(a => a.id !== id)
}

const rejectArticle = (id: number) => {
  console.log('Rejected article:', id)
  pendingArticles.value = pendingArticles.value.filter(a => a.id !== id)
}
</script>

<style scoped>
:deep(.font-serif) {
  font-family: 'Cinzel', serif;
}

.bg-pattern {
  background-image: radial-gradient(#d4af37 0.5px, transparent 0.5px);
  background-size: 24px 24px;
  opacity: 0.03;
}
</style>
