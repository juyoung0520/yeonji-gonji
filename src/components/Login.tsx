import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'

const LoginContainer = styled.div`
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
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
const SignUp = styled.div`
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
function Login() {
  return (
    <LoginContainer>
      <Comment>
        안녕하세요 : )
        <br />
        연지곤지 입니다.
      </Comment>
      <Input placeholder="아이디 입력" />
      <Input placeholder="비밀번호 입력" />
      <LoginButton type="submit">로그인</LoginButton>
      <Link to="/signup">
        <SignUp>회원가입</SignUp>
      </Link>
    </LoginContainer>
  )
}

export default Login
