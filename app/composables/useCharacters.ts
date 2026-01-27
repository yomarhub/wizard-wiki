import type { Character } from '~/plugins/hpAPI'

export const useCharacters = () => {
  const { $hpAPI } = useNuxtApp()

  return useLazyAsyncData<Array<Character>>(
    'characters',
    () => $hpAPI.getCharacters(),
    {
      getCachedData: key => useNuxtData(key).data.value,
      default: () => []
    }
  )
}
