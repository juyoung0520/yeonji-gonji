import styled from '@emotion/styled'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import ItemProductRow from '@/components/ItemProductRow'
import TabList from '@/components/TabList'
import Grid from '@/shared/components/Grid'
import { Keyword } from '@/shared/types'
import { Product } from '@/shared/types'
import { convertToProducts, ProductJson } from '@/shared/utils/jsonUtils'

const Container = styled.div`
  padding: 50px 0;
`

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`

const SearchText = styled.span`
  display: inline-block;
  color: #f26b56;
  font-size: 30px;
  font-weight: 700;
  margin-right: 10px;
`

const HeadText = styled.span`
  display: inline-block;
  font-size: 26px;
  font-weight: 700;
`

const ColorCircle = styled.div<{ color: string }>`
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  outline: none;
  box-shadow: ${(props) => props.color} 0px 0px 0px 15px inset;
  background: transparent;
  margin-right: 10px;
`

interface Props {
  keyword: Keyword
}

function SearchResultBox({ keyword }: Props) {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await axios.get('dummies/products.json').then((response) => {
          const productJsons = response.data.products as ProductJson[]
          setProducts(convertToProducts(productJsons))
        })
      } catch (e) {
        console.log(e)
      }
    }

    fetchProducts()
  }, [])

  return (
    <Container>
      <HeadContainer>
        {keyword.isColor ? (
          <ColorCircle color={keyword.value} />
        ) : (
          <SearchText>&#39;{keyword.value}&#39;</SearchText>
        )}
        <HeadText>검색 결과 (전체 {products.length} 개)</HeadText>
      </HeadContainer>
      <TabList />
      <Grid columns={1} data={products} itemComponent={ItemProductRow} />
    </Container>
  )
}

export default SearchResultBox
