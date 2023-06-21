export enum SheetyDataChunkSize {
  AMOUNT = 13,
  GRID_DENSE_LIMITER = 3,
}

export type Size =
  | 'square-large'
  | 'rect-horizontal'
  | 'rect-vertical'
  | 'rect-horizontal-large'
  | 'square-small'
  | null
export type Sizes = Size[]

export type SheetyData = {
  name: string
  description: string
  link: string
  image: string
  buttonText: string
  id: number
}
