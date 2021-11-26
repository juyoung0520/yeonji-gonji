import styled from '@emotion/styled'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import TabList from '@/components/TabList'
import Grid from '@/shared/components/Grid'
import { Product } from '@/shared/types'
import { convertToProducts, ProductJson } from '@/shared/utils/jsonUtils'

// 패딩 150px이 적용이 안됨
const LikeContainer = styled.div`
  padding: 50px 0;
`
const HeadText = styled.h1`
  margin: 0 0 30px;
  font-size: 32px;
  font-weight: 700;
`
const MoreButton = styled.button`
  cursor: pointer;
  display: block;
  width: 250px;
  background-color: white;
  margin: 0 auto;
  padding: 10px 0;
  border: 1px solid #000;
  color: #000;
  font-size: 14px;
  text-align: center;
`
const moreButtonClick = () => {
  console.log('more!')
}
function LikeBox() {
  const [likedProducts, setLikedProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await axios.get('dummies/products.json').then((response) => {
          const productJsons = response.data.products as ProductJson[]
          setLikedProducts(convertToProducts(productJsons))
        })
      } catch (e) {
        console.log(e)
      }
    }

    fetchProducts()
  }, [])

  return (
    <LikeContainer>
      <HeadText>찜한 상품</HeadText>
      <TabList />
      <Grid columns={4} data={likedProducts} />
    </LikeContainer>
  )
}

export default LikeBox
