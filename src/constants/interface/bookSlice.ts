export interface StateInterface {
  list: Entry
  length: number
}

export interface BookInterface {
  author: string
  title: string
  available: boolean
  ISBN?: string
  image?: string
}

export interface Entry {
 [id: number]: BookInterface 
}
