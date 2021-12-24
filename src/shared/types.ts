export interface User {
  id: number
  name: string
  password: string
  email: string
  age: number
  gender: string
  createDateTime?: string
}

export interface Product {
  id: number
  name: string
  brand: string
  color?: string
  price: string
  image: string
  detailImage: string
  similarity?: number
  createDateTime?: string
  deleteDateTime?: string
}

export interface Keyword {
  value: string
  isColor: boolean
}
