<template>
  <div class="flex flex-row justify-between">
    <NuxtLink class="p-2 rounded-3xl bg-secondary text-primary m-5" :to="prev">Previous Page</NuxtLink>
    <NuxtLink class="p-2 rounded-3xl bg-secondary text-primary m-5" :to="next">Next Page</NuxtLink>
  </div>
</template>

<script setup lang="ts">
function go(right: boolean = true) {
  const routes = useRouter()
    .getRoutes()
    .map(r => r.path)
    .filter(p => p !== '/404' && p !== '/500' && !p.match(/:\w+\(\)/))
    .toSorted((a, b) => right ? a.length - b.length : b.length - a.length)

  // console.log('Available routes:', routes)
  const currentPath = useRoute().path
  const currentIndex = routes.indexOf(currentPath)
  const nextIndex = (currentIndex + 1) % routes.length
  // useRouter().push(routes[nextIndex] ?? '/')
  return routes[nextIndex] ?? '/'
}
const next = go()
const prev = go(false)
// const ignore = (e: PointerEvent) => e.preventDefault()
</script>
