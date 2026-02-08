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
  name: string
  description: string
}

export interface User {
  id: number
  role: 'USER' | 'ADMIN' | 'PROFESSIONAL'
  email: string
  username: string
  password: string
}

export interface ChatMessage {
  id: number
  userId: number
  message: string
}

export const toKeyed = <T>(obj: T, key: string) => obj[key as keyof T]
export const toTyped = <T>(obj: T, key: keyof T): T[keyof T] => obj[key]
