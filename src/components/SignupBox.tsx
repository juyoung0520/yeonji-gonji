import { PROPERTY_TYPES } from '@babel/types'
import styled from '@emotion/styled'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const SignupForm = styled.form`
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
  & ~ * {
    margin-top: 3px;
  }
`
const SignupButton = styled.button`
  width: 100%;
  margin-top: 35px;
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
const Label = styled.div`
  color: #202429;
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  line-height: 22px;
`
const Span = styled.span`
  color: red;
  margin-left: 8px;
  font-size: 12px;
`
const Container = styled.div<{ text_align: string }>`
  width: 100%;
  margin-top: 0;
  display: inline-block;

  > input {
    width: 32.5%;
    margin: 3px;
    text-align: ${(props) => props.text_align};
  }

  > :first-child {
    margin-left: 0px;
  }

  > :last-child {
    margin-right: 0px;
  }
`
//유효성 검사
const signUpValidation = yup.object({
  userName: yup.string().required('닉네임을 입력해주세요.'),
  userId: yup.string().required('아이디를 입력해주세요.'),
  email: yup.string().email().required('이메일을 입력해주세요.'),
  password1: yup.string().required('비밀번호를 입력해주세요.'),
  password2: yup
    .string()
    .oneOf([yup.ref('password1'), null])
    .required('비밀번호가 일치하지 않습니다.'),
})

function SignupBox() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpValidation),
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <SignupForm onSubmit={handleSubmit(onSubmit)}>
      <Comment>가입을 시작합니다!</Comment>
      <div>
        <Label>
          아이디<Sup> *</Sup>
        </Label>
        <Input type="text" placeholder="아이디" {...register('userId')} />
        <Span>{errors.userId && '아이디를 입력해주세요.'}</Span>
      </div>
      <div>
        <Label>
          닉네임<Sup> *</Sup>
        </Label>
        <Input type="text" placeholder="닉네임" {...register('userName')} />
        <Span>{errors.userName && '닉네임을 입력해주세요.'}</Span>
      </div>
      <div>
        <Label>
          이메일<Sup> *</Sup>
        </Label>
        <Input type="text" placeholder="이메일" {...register('email')} />
        <Span>{errors.email && '이메일 형식이 맞지 않습니다.'}</Span>
      </div>
      <div>
        <Label>
          비밀번호<Sup> *</Sup>
        </Label>
        <Input
          type="password"
          placeholder="비밀번호"
          {...register('password1')}
        />
        <Span>{errors.password1 && '비밀번호를 입력해주세요.'}</Span>
        <Input
          type="password"
          placeholder="비밀번호 확인"
          {...register('password2')}
        />
        <Span>{errors.password2 && '비밀번호가 일치하지 않습니다.'}</Span>
      </div>
      <div>
        <Label>연락처</Label>
        <Container text_align="center">
          <Input placeholder="010" />
          <Input placeholder="0000" />
          <Input placeholder="0000" />
        </Container>
      </div>
      <div>
        <Label>생년월일</Label>
        <Container text_align="left">
          <Input placeholder="년도" />
          <Input placeholder="월" />
          <Input placeholder="일" />
        </Container>
      </div>
      {/* <Label>성별</Label>
      <Form>
        <Form.Group inline>
          <Form.Radio label="Male" value="male" />
          <Form.Radio label="Female" value="female" />
        </Form.Group>
      </Form> */}
      {/*성, social_login */}
      <SignupButton type="submit">가입하기</SignupButton>
    </SignupForm>
  )
}

export default SignupBox
