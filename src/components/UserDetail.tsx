import styled from '@emotion/styled'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import next from '@/drawables/next.png'
import Grid from '@/shared/components/Grid'
import { Product } from '@/shared/types'
import { convertToProducts, ProductJson } from '@/shared/utils/jsonUtils'

const Content = styled.div`
  padding: 0 1rem;
`

const HeaderContainer = styled.div`
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Header = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 0px;
`

const SignOutButton = styled.button`
  font-size: 14px;
  font-weight: 400;
  background-color: #fff;
  color: #3e4145;
  padding: 14px;
  border-radius: 6px;
  border: solid 1px #e4e6e9;
  cursor: pointer;
`
const SubHeaderContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-top: 50px;
  border-bottom: 1px solid #000;
  padding-bottom: 16px;
  margin-bottom: 1rem;
`
const ArrowButton = styled.div`
  cursor: pointer;
  display: flex;

  & > :first-child {
    font-size: 20px;
    font-weight: 300;
    color: black;
  }

  & > :last-child {
    width: 19px;
    height: 19px;
  }
`

const SubHeader = styled.h2`
  font-size: 2em;
  font-weight: 300;
  margin-bottom: 0px;
`

const InfoItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #bdbdbd;

  & > :first-child {
    font-size: 17px;
    margin-left: 30px;
    margin-right: 50px;
    font-weight: 500;
  }

  & > :last-child {
    font-size: 15px;
    font-weight: 300;
  }
`

const infoList = [
  { field: '닉네임', content: '두부낑' },
  { field: '이메일', content: 'juyoung0520@naver.com' },
  { field: '이메일', content: 'juyoung0520@naver.com' },
]

function UserDetail() {
  const [isLogin, setIsLogin] = useState(true)
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

  const handleLoginOnClick = () => {
    setIsLogin((prev) => !prev)
    console.log(isLogin)
  }

  return (
    <>
      <HeaderContainer>
        <Header>마이페이지</Header>
        <SignOutButton onClick={handleLoginOnClick}>로그아웃</SignOutButton>
      </HeaderContainer>
      <Content>
        <SubHeaderContainer>
          <SubHeader>회원정보</SubHeader>
          <Link to="/signup">
            <ArrowButton>
              <span>수정하기</span>
              <img src={next} />
            </ArrowButton>
          </Link>
        </SubHeaderContainer>
        {infoList.map(({ field, content }, index) => (
          <InfoItem key={index}>
            <span>{field}</span>
            <span>{content}</span>
          </InfoItem>
        ))}
        <SubHeaderContainer>
          <SubHeader>찜 목록</SubHeader>
          <Link to="/like">
            <ArrowButton>
              <span>더보기</span>
              <img src={next} />
            </ArrowButton>
          </Link>
        </SubHeaderContainer>
        <Grid columns={4} data={products.slice(0, 4)} previewMode={true} />
      </Content>
    </>
  )
}

export default UserDetail
