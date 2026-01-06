<template>
  <div class="flex flex-row justify-between">
    <button class="p-2 rounded-3xl bg-secondary text-primary m-5" @click="next" @contextmenu="ignore">Previous Page</button>
    <button class="p-2 rounded-3xl bg-secondary text-primary m-5" @click="prev" @contextmenu="ignore">Next Page</button>
  </div>
</template>

<script setup lang="ts">
function go(e: PointerEvent, right: boolean = true) {
  e.preventDefault()
  const routes = useRouter()
    .getRoutes()
    .map(r => r.path)
    .filter(p => p !== '/404' && p !== '/500' && !p.match(/:\w+\(\)/))
    .toSorted((a, b) => right ? a.length - b.length : b.length - a.length)
  console.log('Available routes:', routes)
  const currentPath = useRoute().path
  const currentIndex = routes.indexOf(currentPath)
  const nextIndex = (currentIndex + 1) % routes.length
  useRouter().push(routes[nextIndex] ?? '/')
}
const next = (e: PointerEvent) => go(e)
const prev = (e: PointerEvent) => go(e, false)
const ignore = (e: PointerEvent) => e.preventDefault()
</script>
