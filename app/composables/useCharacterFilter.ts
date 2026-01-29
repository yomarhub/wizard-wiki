export const useCharacterFilter = () => {
  const STORAGE_KEY = 'character-filters'

  const defaultFilters = Object.fromEntries(['name', 'alternate_names', 'species', 'gender', 'house', 'dateOfBirth', 'yearOfBirth', 'wizard', 'ancestry', 'eyeColour', 'hairColour', 'wand', 'patronus', 'hogwartsStudent', 'hogwartsStaff', 'actor', 'alternate_actors', 'alive', 'image'].map(key => [key, null]))
  const filters = useState(() => defaultFilters)
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
