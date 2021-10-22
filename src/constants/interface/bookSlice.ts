export interface StateInterface {
  list: Entry
  length: number
}

export interface BookInterface {
  authors: string[]
  title: string
  available: boolean
  ISBN?: string
  cover?: string
}

export interface Entry {
 [id: number]: BookInterface 
}
