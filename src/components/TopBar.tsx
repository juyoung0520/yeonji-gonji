import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'

import glass from '@/drawable/glass.png'
import heart from '@/drawable/heart.png'
import logo from '@/drawable/logo.png'
import user from '@/drawable/user.png'

const Header = styled.div`
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  width:100%
  height: 96px;
  background-color: white;
  padding: 30px 179px 24px 179px;
  z-index:999;
  \ > first:child {
    width: 60px;
    height: 60px;
  }
`
const Logo = styled.button<{ imgUrl: string }>`
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  background-size: cover;
  background-image: url(${(props) => props.imgUrl});
`
const Search = styled.div`
  width: 304px;
  height: 40px;
  margin-left: auto;
  display: flex;
  align-items: center;
  padding: 1px 2px;
  border-right: 0px;
  border-top: 0px;
  border-left: 0px;
  border-bottom: solid 2px;
  > button {
    width: 25px;
    height: 25px;
  }
`
const SearchBox = styled.input`
  width: 264px;
  height: 38px;
  padding-right: 10px;
  padding: 1px 2px;
  border: none;

  :focus {
    outline: none;
  }
`
const ButtonContainer = styled.div`
  margin-left: 60px;
`
const Button = styled.button<{ imgUrl: string }>`
  margin-left: 30px;
  width: 35px;
  height: 35px;
  border: none;
  background-color: transparent;
  background-size: cover;
  background-image: url(${(props) => props.imgUrl});
`
function TopBar() {
  return (
    <Header>
      <Logo imgUrl={logo}></Logo>
      <Search>
        <SearchBox></SearchBox>
        <Button imgUrl={glass}></Button>
      </Search>
      <ButtonContainer>
        <Button imgUrl={heart}></Button>
        <Button imgUrl={user}></Button>
      </ButtonContainer>
    </Header>
  )
}
export default TopBar
