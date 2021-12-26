export interface User {
  id: number
  name: string
  email: string
  password1: string
  password2: string
  age: number
  gender: string
  createDateTime?: string
}

export interface Product {
  id: number
  name: string
  brand: string
  color: string
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
