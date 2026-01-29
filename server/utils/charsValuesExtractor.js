export default (data) => {
  if (data.length === 0 || !data[0]) return {}
  const firstChar = data[0]
  const keys = Object.keys(firstChar).filter(k => k !== 'id')
  const values = {}
  keys.forEach((key) => {
    const mappedValues = data
      .map((char) => {
        const val = char[key]
        if (val === null || val === undefined)
          return null
        if (typeof val === 'string')
          return val
        else if (Array.isArray(val))
          return val.join(', ')
        else
          return !(Object.keys(val).includes('wood') && val.wood === '') ? val : null
      })
      .filter(val => val !== null && val !== undefined && typeof val === 'string' ? val.trim() !== '' : true)
    values[key] = Array.from(new Set(mappedValues)).sort()
  })
  return values
}
