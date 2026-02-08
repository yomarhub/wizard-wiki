export const useCharacterFilter = () => {
  const STORAGE_KEY = 'character-filters'

  const defaultFilters = Object.fromEntries(
    [
      ['name', 'alternate_names', 'gender', 'house', 'species', 'ancestry'].map(key => [key, undefined as string | undefined]),
      ['wizard', 'hogwartsStudent', 'hogwartsStaff', 'alive', 'image'].map(key => [key, undefined as boolean | undefined]),
      ['dateOfBirth', 'yearOfBirth', 'eyeColour', 'hairColour', 'wand', 'patronus', 'actor', 'alternate_actors'].map(key => [key, undefined])
    ].flat()
  )
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
