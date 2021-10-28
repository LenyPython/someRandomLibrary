export interface StateInterface {
  list: BookInterface[]
}

export interface BookInterface {
  id: string
  authors: string[]
  title: string
  available: boolean
  ISBN?: string
  cover?: string
}

