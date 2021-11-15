import { Product } from '@/shared/types'

export interface ProductJson {
  BRND_NM: string
  SL_PC: string
  PRD_NM: string
  PRD_ID: string
  PRD_IMG: string
}

export function convertToProducts(json: ProductJson[]) {
  return json.map(({ BRND_NM, SL_PC, PRD_NM, PRD_ID, PRD_IMG }) => {
    const product: Product = {
      id: Number(PRD_ID),
      brand: BRND_NM,
      name: PRD_NM,
      price: SL_PC,
      image: PRD_IMG,
    }

    return product
  })
}
