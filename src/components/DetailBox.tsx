import styled from '@emotion/styled'
import React, { useState } from 'react'

import filledHeart from '@/drawables/filledHeart.png'
import heart from '@/drawables/heart.png'
import { Product } from '@/shared/types'
import { addComma } from '@/shared/utils/stringUtils'

const Container = styled.div`
  padding: 70px 0;
`
const WrapInfo = styled.div`
  display: flex;
`
const LeftArea = styled.div`
  width: calc(50% - 20px);
  margin: 0 50px 50px 0;
`
const DetailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const RightArea = styled.div`
  display: block;
  position: relative;
  width: calc(50% - 20px);
`
const WrapProductInfo = styled.div`
  float: left;
  width: 100%;
  padding: 70px 0 170px 0;
`
const Brand = styled.div`
  color: #202429;
  font-size: 18px;
  margin-bottom: 10px;
`
const Name = styled.div`
  color: #202429;
  font-size: 26px;
  margin-bottom: 10px;
  line-height: 1.38;
`
const Price = styled.div`
  color: #f26b56;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 10px;
`
const WrapButton = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  position: absolute;
  bottom: 100px;
  vertical-align: middle;
`
const MakeupButton = styled.button`
  cursor: pointer;
  width: calc(70% - 20px);
  margin-right: 20px;
  height: 70px;
  border: none;
  color: white;
  font-size: 17px;
  font-weight: bold;
  background-color: #f5b4a9;
  border-radius: 6px;
`
const LikeButton = styled.button<{ liked: boolean }>`
  cursor: pointer;
  width: 70px;
  height: 70px;
  background-size: 35px 35px;
  background-repeat: no-repeat;
  background-position: 50%;
  background-color: transparent;
  ${(props) =>
    props.liked
      ? `background-image: url(${filledHeart})`
      : `background-image:url(${heart})`};
  border: 1px solid #e3e5e8;
  border-radius: 6px;
`
const Tab = styled.ul`
  cursor: pointer;
  display: table;
  padding: 0;
  list-style: none;
  width: 100%;
  border-bottom: 4px solid #f2f2f2;
  background-color: #fff;
  font-size: 13px;
  border-collapse: collapse;
  .active {
    color: black;
    border-bottom: 4px solid black;
  }
`
const Li = styled.li`
  display: table-cell;
  line-height: 70px;
  width: 50%;
  text-align: center;
  vertical-align: middle;
  font-size: 17px;
  color: #9a9a9e;
`

const TabContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`

interface Props {
  product: Product
}

const DetailBox = ({ product }: Props) => {
  console.log(product)

  const [liked, setLiked] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const clickHandler = (index: number) => {
    setActiveIndex(index)
  }
  const tabContArr = [
    {
      tabTitle: '상세페이지',
      tabCont: <div>상세페이지 입니다.</div>,
    },
    {
      tabTitle: '후기',
      tabCont: <div>후기입니다</div>,
    },
  ]

  return (
    <Container>
      <WrapInfo>
        <LeftArea>
          <DetailImage src={product.image} />
        </LeftArea>
        <RightArea>
          <WrapProductInfo>
            <Brand>{product.brand}</Brand>
            <Name>{product.name}</Name>
            <Price>
              {addComma(product.price)}
              <span>원</span>
            </Price>
          </WrapProductInfo>
          <WrapButton>
            <MakeupButton>화장 해보기</MakeupButton>
            <LikeButton liked={liked} onClick={() => setLiked(!liked)} />
          </WrapButton>
        </RightArea>
      </WrapInfo>
      <Tab>
        {tabContArr.map((section, index) => {
          return (
            <Li
              key={index}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => clickHandler(index)}
            >
              {tabContArr[index].tabTitle}
            </Li>
          )
        })}
      </Tab>
      <TabContainer>
        {activeIndex === 0 ? (
          <p dangerouslySetInnerHTML={{ __html: product.detailImage }} />
        ) : (
          tabContArr[activeIndex].tabCont
        )}
      </TabContainer>
    </Container>
  )
}
export default DetailBox
