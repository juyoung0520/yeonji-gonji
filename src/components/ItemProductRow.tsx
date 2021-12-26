import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import filledHeart from '@/drawables/filledHeart.png'
import heart from '@/drawables/heart.png'
import { Product } from '@/shared/types'
import { addComma } from '@/shared/utils/stringUtils'

interface Props {
  product: Product
}

const Container = styled.div`
  width: 100%;
  height: 215px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 1px solid #ddd;
`
const Link = styled(RouterLink)`
  flex: 4;
  display: flex;
  align-items: center;
`

const Img = styled.img`
  width: 215px;
  height: 215px;
  object-fit: cover;
  padding: 25px;
`

const WrapInfo = styled.div`
  margin-left: 10px;

  > * {
    display: block;
    line-height: 25px;
  }

  & :first-child {
    color: #777;
    font-weight: 700;
  }

  & :last-child {
    font-size: 15px;
    color: #000;
    font-weight: 500;
  }
`

const Price = styled.span`
  flex: 0.5;
  font-size: 18px;
  font-weight: bold;
  color: black;

  & :last-child {
    font-size: 15px;
  }
`

const Percentage = styled.span`
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  color: #f26b56;

  & :last-child {
    font-size: 18px;
  }
`
const Heart = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 25px;
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

function ItemProductRow({ product }: Props) {
  const [likedState, setLikedState] = useState<boolean>(false)

  const handleLikeOnClick = React.useCallback(() => {
    setLikedState((prev) => {
      // 상태 서버에 반영
      return !prev
    })
  }, [likedState])

  return (
    <Container>
      <Link
        to={{
          pathname: `/detail/${product.name}`,
          state: product,
        }}
      >
        <Img src={product.image} />
        <WrapInfo>
          <span>{product.brand}</span>
          <span>{product.name}</span>
        </WrapInfo>
      </Link>
      {product.similarity && (
        <>
          <ColorCircle color={product.color} title={product.color} />
          <Percentage>
            {product.similarity}
            <span>%</span>
          </Percentage>
        </>
      )}
      <Price>
        {addComma(product.price)}
        <span>원</span>
      </Price>
      <Heart
        src={likedState ? filledHeart : heart}
        onClick={handleLikeOnClick}
      />
    </Container>
  )
}

export default ItemProductRow
