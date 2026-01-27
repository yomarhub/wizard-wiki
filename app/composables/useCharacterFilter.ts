export const useCharacterFilter = () => {
  const hasImage = useState('filterHasImage', () => false)

  return {
    hasImage
  }
}
