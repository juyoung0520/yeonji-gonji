import styled from '@emotion/styled'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import ItemProductRow from '@/components/ItemProductRow'
import TabList from '@/components/TabList'
import Grid from '@/shared/components/Grid'
import { Product } from '@/shared/types'
import { convertToProducts, ProductJson } from '@/shared/utils/jsonUtils'

const Container = styled.div`
  padding: 50px 0;
`

const SearchText = styled.span`
  display: inline-block;
  margin: 0 10px 30px 0;
  color: #f26b56;
  font-size: 30px;
  font-weight: 700;
`

const HeadText = styled.span`
  display: inline-block;
  margin: 0 0 30px;
  font-size: 26px;
  font-weight: 700;
`

function SearchResultBox() {
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
  }, [products])

  return (
    <Container>
      <SearchText>&#39;틴트&#39;</SearchText>
      <HeadText>검색 결과 (전체 {products.length} 개)</HeadText>
      <TabList />
      <Grid columns={1} data={products} itemComponent={ItemProductRow} />
    </Container>
  )
}

export default SearchResultBox
