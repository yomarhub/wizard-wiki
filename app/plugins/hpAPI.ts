export interface Wand {
  wood: string
  core: string
  length: number | string
}

export interface Character {
  id: string
  name: string
  alternate_names: string[]
  species: string
  gender: string
  house: string
  dateOfBirth: string
  yearOfBirth: number
  wizard: boolean
  ancestry: string
  eyeColour: string
  hairColour: string
  wand: Wand
  patronus: string
  hogwartsStudent: boolean
  hogwartsStaff: boolean
  actor: string
  alternate_actors: string[]
  alive: boolean
  image: string
}

export interface Spell {
  id: string
  spell: string
  type: string
  effect: string
}

export default defineNuxtPlugin(() => {
  const baseURL = () => useRuntimeConfig().public.API_BASE_URL
  // Returns all characters (wizards, witches, magical creatures): fetch(baseURL+'/api/characters').then(r=>r.json())
  // Find a specific character by their unique ID: fetch(baseURL+'/api/character/:id').then(r=>r.json())
  // Retrieve all Hogwarts students (past and present): fetch(baseURL+'/api/characters/students').then(r=>r.json())
  // Access information about Hogwarts faculty and staff: fetch(baseURL+'/api/characters/staff').then(r=>r.json())
  // Find characters from a specific Hogwarts house: fetch(baseURL+'/api/characters/house/:house').then(r=>r.json())
  // Discover all magical spells and their incantations: fetch(baseURL+'/api/spells').then(r=>r.json())

  const getCharacters = async (): Promise<Array<Character>> => {
    const result = await $fetch(`${baseURL}/characters`) as Array<Character>
    return result
  }
  const getCharacterById = async (id: string): Promise<Character> => {
    const result = await $fetch(`${baseURL}/character/${id}`) as Character
    return result
  }
  // TODO: types for other methods
  const getStudents = async () => {
    const value = await $fetch(`${baseURL}/characters/students`)
    return { data: value }
  }
  const getStaff = async () => {
    const value = await $fetch(`${baseURL}/characters/staff`)
    return { data: value }
  }
  const getHouseMembers = async (house: 'gryffindor' | 'slytherin' | 'ravenclaw' | 'hufflepuff') => {
    const value = await $fetch(`${baseURL}/characters/house/${house}`)
    return { data: value }
  }
  const getSpells = async () => {
    const value = await $fetch(`${baseURL}/spells`)
    return { data: value }
  }

  return {
    provide: {
      hpAPI: {
        getCharacters,
        getCharacterById,
        getStudents,
        getStaff,
        getHouseMembers,
        getSpells,
        baseURL
      }
    }
  }
})
