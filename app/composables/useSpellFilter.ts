export const useSpellFilter = () => {
  const STORAGE_KEY = 'spell-filters'

  const defaultFilters = {
    spell: null as string | null,
    type: null as string | null,
    effect: null as string | null
  }

  const filters = useState('spell-filters', () => ({ ...defaultFilters }))

  onMounted(() => {
    const savedData = localStorage.getItem(STORAGE_KEY)
    if (savedData) {
      filters.value = JSON.parse(savedData)
    }

    watch(filters, (newValue) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue))
    }, { deep: true })

    window.addEventListener('storage', (event) => {
      if (event.key === STORAGE_KEY && event.newValue) {
        filters.value = JSON.parse(event.newValue)
      }
    })
  })

  const clearFilters = () => {
    filters.value = { ...defaultFilters }
  }

  return {
    filters,
    clearFilters
  }
}
