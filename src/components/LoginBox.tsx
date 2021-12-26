import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'

const LoginContainer = styled.div`
  margin: 150px auto;
  width: 566px;
`
const Comment = styled.h1`
  font-size: 34px;
  line-height: 44px;
  font-weight: normal;
  color: #202429;
  margin-bottom: 56px;
`
const LoginButton = styled.button`
  width: 100%;
  margin-top: 5px;
  color: white;
  height: 57px;
  border-radius: 8px;
  background-color: black;
  font-size: 18px;
  font-weight: bold;
`
const SignUpButton = styled.div`
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: 13px;
  color: #202429;
`
const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  vertical-align: top;
  padding: 0.67857143em 1em;
  color: #202429;
  font-size: 16px;
  line-height: 1.21428571em;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #d3d7df;
  ::placeholder {
    color: #d3d7df;
    font-weight: bold;
  }
  :focus {
    outline: none;
    font-size: 16px;
  }
`
import { History } from 'history'
import { useForm } from 'react-hook-form'

import { User } from '@/shared/types'
function LoginBox() {
  const { handleSubmit, register } = useForm()

  const onSubmit = (data: User) => {
    const loadedUserArray = localStorage.getItem('USER')
    if (loadedUserArray !== null) {
      //localStorage.getItem이 null인지 확인하고 parse 해야 함
      const parsedUserArray = JSON.parse(loadedUserArray)
      const currentUser: User = parsedUserArray.find(
        (user: Array<string>) =>
          user[0] === data.email && user[1] === data.password2,
      )
      if (currentUser) {
        localStorage.setItem('isLogin', 'true')
        localStorage.setItem('currentUSER', JSON.stringify(currentUser))
        alert('로그인 성공')
        history.go(-1)
      } else {
        alert('로그인 실패')
      }
    } else {
      alert('로그인 실패')
    }
  }

  return (
    <LoginContainer>
      <Comment>
        안녕하세요 : )
        <br />
        연지곤지 입니다.
      </Comment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" {...register('email')} placeholder="아이디 입력" />
        <Input
          type="password"
          {...register('password2')}
          placeholder="비밀번호 입력"
        />
        <LoginButton type="submit">로그인</LoginButton>
        <Link to="/signup">
          <SignUpButton>회원가입</SignUpButton>
        </Link>
      </form>
    </LoginContainer>
  )
}

export default LoginBox
