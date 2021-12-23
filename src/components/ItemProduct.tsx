import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'

import { Product } from '@/shared/types'
import { addComma } from '@/shared/utils/stringUtils'

interface Props {
  key?: number
  product: Product
}

const ItemBox = styled.div`
  padding: 0 0 30px;
  left: 50%;
`
const WrapInfo = styled.div`
  > * {
    display: block;
    line-height: 25px;
  }
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 15px;
`
const InfoBrand = styled.span`
  font-size: 13px;
  color: #808893;
`
const InfoName = styled.span`
  font-size: 15px;
  color: #202429;
`
const InfoPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #f26b56;

  span {
    font-size: 15px;
  }
`

function ItemProduct({ key, product }: Props) {
  return (
    <ItemBox>
      <Link
        to={{
          pathname: `/detail/${product.name}`,
          state: {
            key,
            product,
          },
        }}
      >
        <WrapInfo>
          <Img src={product.image} />
          <InfoBrand>{product.brand}</InfoBrand>
          <InfoName>{product.name}</InfoName>
          <InfoPrice>
            {addComma(product.price)}
            <span>원</span>
          </InfoPrice>
        </WrapInfo>
      </Link>
    </ItemBox>
  )
}

export default ItemProduct
