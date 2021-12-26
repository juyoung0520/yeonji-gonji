import styled from '@emotion/styled'
import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import glass from '@/drawables/glass.png'
import heart from '@/drawables/heart.png'
import logo from '@/drawables/logo.png'
import user from '@/drawables/user.png'
import { Keyword } from '@/shared/types'

const Header = styled.div`
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 96px;
  border-bottom: 1px solid LightGray;
  background-color: white;
  z-index: 999;
  \ > first:child {
    width: 60px;
    height: 60px;
  }
`
const Logo = styled.button<{ imgUrl: string }>`
  cursor: pointer;
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
  border-bottom: solid 1px;

  button {
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
  cursor: pointer;
  margin-left: 30px;
  width: 35px;
  height: 35px;
  border: none;
  background-color: transparent;
  background-size: cover;
  background-image: url(${(props) => props.imgUrl});
`
function TopBar() {
  const [keyword, setKeyword] = useState<string>('')
  const isLogin = localStorage.getItem('isLogin')
  const handleKeyWordChange = useCallback(
    (target: EventTarget & HTMLInputElement) => {
      setKeyword(target.value)
    },
    [],
  )

  return (
    <Header>
      <Link to="/">
        <Logo imgUrl={logo} />
      </Link>
      <Search>
        <SearchBox
          value={keyword}
          onChange={(event) => handleKeyWordChange(event.target)}
        />
        <Link
          to={{
            pathname: '/searchResult',
            state: { value: keyword, isColor: false },
          }}
        >
          <Button imgUrl={glass} />
        </Link>
      </Search>
      <ButtonContainer>
        <Link to="/like">
          <Button imgUrl={heart} />
        </Link>
        {isLogin !== 'true' ? (
          <Link to="/login">
            <Button imgUrl={user} />
          </Link>
        ) : (
          <Link to="/user">
            <Button imgUrl={user} />
          </Link>
        )}
      </ButtonContainer>
    </Header>
  )
}
export default TopBar
