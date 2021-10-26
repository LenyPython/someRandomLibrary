export interface StateInterface {
  list: BookInterface[]
  length: number
}

export interface BookInterface {
  authors: string[]
  title: string
  available: boolean
  ISBN?: string
  cover?: string
}

