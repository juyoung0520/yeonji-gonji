import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'
interface AddItemProps {
  key: number
  imgUrl: string
  brand: string
  name: string
  price: string
}
const ItemBox = styled.div`
  padding: 0 8px 30px;
  left: 50%;
`
const Wrap_info = styled.div`
  > * {
    display: block;
    line-height: 25px;
  }
`
const Img = styled.img`
  wkeyth: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 15px;
`
const Info_brand = styled.span`
  font-size: 13px;
  color: #808893;
`
const Info_name = styled.span`
  font-size: 15px;
  color: #202429;
`
const Info_price = styled.span`
  font-size: 18px;
  font-weight: bold;
`
function AddItem({ key, imgUrl, brand, name, price }: AddItemProps) {
  console.log(key, brand, name)

  return (
    <ItemBox>
      <Link
        to={{
          pathname: `/detail/${name}`,
          state: {
            key,
            imgUrl,
            brand,
            name,
            price,
          },
        }}
      >
        <Wrap_info>
          <Img src={imgUrl} />
          <Info_brand>{brand}</Info_brand>
          <Info_name>{name}</Info_name>
          <Info_price>{price}</Info_price>
        </Wrap_info>
      </Link>
    </ItemBox>
  )
}

export default AddItem
