export interface StateInterface {
  list: BookInterface[]
}

export interface BookInterface {
  id: string
  authors: string[]
  title: string
  available: boolean
  ISBN: string
  cover: string
}

export interface requiredData {
  authors: string[]
  title: string
  ISBN?: string
  cover?: string
}
