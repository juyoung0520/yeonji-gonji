export interface User {
  id: number
  name: string
  password: string
  email: string
  phone?: string
  age: number
  gender: string
  createDateTime?: string
}

export interface Product {
  id: number
  name: string
  detailName: string
  brand: string
  color: string
  price: string
  image: string
  createDateTime?: string
  deleteDateTime?: string
}
