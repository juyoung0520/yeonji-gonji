import { Product } from '@/shared/types'
import { calcSimilarity } from '@/shared/utils/colorUtils'

export interface ProductJson {
  BRND_NM: string
  SL_PC: string
  PRD_NM: string
  PRD_ID: string
  PRD_IMG: string
  PRD_DETAIL?: string
  PRD_COLOR: string
}

export function convertToProducts(json: ProductJson[]) {
  return json.map(
    ({
      BRND_NM,
      SL_PC,
      PRD_NM,
      PRD_ID,
      PRD_IMG,
      PRD_COLOR,
      PRD_DETAIL = '<p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/06/10003882_20200206152721.jpg" alt="" /></p><p><br /></p><p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/06/10003882_20200206152743.jpg" alt="" /></p><p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/06/10003882_20200206152754.jpg" alt="" /> </p><p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/18/10003882_20200218165027.jpg" alt="" /></p>',
    }) => {
      const product: Product = {
        id: Number(PRD_ID),
        brand: BRND_NM,
        name: PRD_NM,
        price: SL_PC,
        image: PRD_IMG,
        color: PRD_COLOR,
        detailImage: PRD_DETAIL,
      }

      return product
    },
  )
}

export function convertToProductsByColor(
  json: ProductJson[],
  keywordColor: string,
) {
  return json.map(
    ({
      BRND_NM,
      SL_PC,
      PRD_NM,
      PRD_ID,
      PRD_IMG,
      PRD_COLOR,
      PRD_DETAIL = '<p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/06/10003882_20200206152721.jpg" alt="" /></p><p><br /></p><p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/06/10003882_20200206152743.jpg" alt="" /></p><p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/06/10003882_20200206152754.jpg" alt="" /> </p><p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/18/10003882_20200218165027.jpg" alt="" /></p>',
    }) => {
      const product: Product = {
        id: Number(PRD_ID),
        brand: BRND_NM,
        name: PRD_NM,
        price: SL_PC,
        image: PRD_IMG,
        color: PRD_COLOR,
        similarity: calcSimilarity(keywordColor, PRD_COLOR),
        detailImage: PRD_DETAIL,
      }

      return product
    },
  )
}
