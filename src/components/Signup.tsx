import styled from '@emotion/styled'
import React, { FunctionComponent, ReactNode, useState } from 'react'
import { Form } from 'semantic-ui-react'

interface InputWithLabelProps {
  label?: string
  placeholder: string
}
const SignupContainer = styled.div`
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
  width: 566px;
`
const Comment = styled.h1`
  font-size: 32px;
  line-height: 36px;
  font-weight: bold;
  text-align: center;
  color: #202429;
  margin-bottom: 56px;
`
const Input = styled.input`
  width: 100%;
  height: 50px;
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
const SignupButton = styled.button`
  width: 100%;
  margin-top: 5px;
  color: white;
  height: 57px;
  border-radius: 8px;
  background-color: black;
  font-size: 18px;
  font-weight: bold;
`
const Sup = styled.sup`
  color: red;
`
const Wrapper = styled.div`
  margin-bottom: 30px;
  & + * {
    margin-top: 20px;
  }
`
const Label = styled.div`
  color: #202429;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  line-height: 22px;
`
const Container = styled.div`
  width: 100%;
  text-align: center;
  > div {
    margin-top: 0;
    display: inline-block;
    width: 188.6px;
    padding-left: 6px;
    padding-right: 6px;
  }
  > div:first-child {
    padding-left: 0px;
  }
  > div:last-child {
    padding-right: 0px;
  }
`
const PhoneNumberContainer = styled(Container)`
  > div > input {
    text-align: center;
  }
`
const BirthContainer = styled(Container)`
  > div > input {
    text-align: left;
  }
`
const InputWithLabel = ({ label, placeholder }: InputWithLabelProps) => {
  return (
    <Wrapper>
      {label ? (
        <Label>
          {label}
          <Sup>*</Sup>
        </Label>
      ) : (
        ''
      )}
      {label === '비밀번호' ? (
        <Input type="password" placeholder={placeholder} />
      ) : (
        <Input placeholder={placeholder} />
      )}
    </Wrapper>
  )
}
function Signup() {
  return (
    <SignupContainer>
      <Comment>가입을 시작합니다!</Comment>
      <InputWithLabel label="이름" placeholder="사용자명 입력" />
      <InputWithLabel label="이메일" placeholder="이메일 입력" />
      <InputWithLabel label="비밀번호" placeholder="비밀번호 입력" />
      <Label>연락처</Label>
      <PhoneNumberContainer>
        <InputWithLabel placeholder="010" />
        <InputWithLabel placeholder="0000" />
        <InputWithLabel placeholder="0000" />
      </PhoneNumberContainer>
      <Label>생년월일</Label>
      <BirthContainer>
        <InputWithLabel placeholder="년도" />
        <InputWithLabel placeholder="월" />
        <InputWithLabel placeholder="일" />
      </BirthContainer>
      <Label>성별</Label>
      <Form>
        <Form.Group inline>
          <Form.Radio label="Male" value="male" />
          <Form.Radio label="Female" value="female" />
        </Form.Group>
      </Form>
      {/*성, social_login */}
      <SignupButton>가입하기</SignupButton>
    </SignupContainer>
  )
}

export default Signup
