import { messages } from '~/datas/messages'
import { users } from '~/datas/users'
import type { Character, ChatMessage, User } from '~/utils/types'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const baseURL = config.public.API_BASE_URL

  // Returns all characters (wizards, witches, magical creatures): fetch(baseURL+'/api/characters').then(r=>r.json())
  // Find a specific character by their unique ID: fetch(baseURL+'/api/character/:id').then(r=>r.json())
  // Retrieve all Hogwarts students (past and present): fetch(baseURL+'/api/characters/students').then(r=>r.json())
  // Access information about Hogwarts faculty and staff: fetch(baseURL+'/api/characters/staff').then(r=>r.json())
  // Find characters from a specific Hogwarts house: fetch(baseURL+'/api/characters/house/:house').then(r=>r.json())
  // Discover all magical spells and their incantations: fetch(baseURL+'/api/spells').then(r=>r.json())

  const getUsers = async (): Promise<Array<User>> => {
    return await Promise.resolve(users)
  }
  const getChatMessages = async (): Promise<Array<ChatMessage>> => {
    return await Promise.resolve(messages)
  }
  const getCharacters = async (): Promise<Array<Character>> => {
    return await $fetch(`${baseURL}/characters`)
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
        getUsers,
        getChatMessages,
        getCharacters,
        getCharacterById,
        getStudents,
        getStaff,
        getHouseMembers,
        getSpells
      }
    }
  }
})
