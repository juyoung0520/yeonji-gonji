import styled from '@emotion/styled'
import React, { FormEvent, useState } from 'react'
import { Form } from 'semantic-ui-react'

const Input = styled(Form.Input)`
  width: 300px;
`

function SearchText() {
  const [keyWord, setKeyWord] = useState<string>('')

  const handleFromOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setKeyWord('')
  }

  const handleKeyWordChange = (target: EventTarget & HTMLInputElement) => {
    setKeyWord(target.value)
  }

  return (
    <Form onSubmit={handleFromOnSubmit}>
      <Form.Group>
        <Input
          type="text"
          value={keyWord}
          placeholder="제품 검색"
          onChange={(event) => handleKeyWordChange(event.target)}
        />
        <Form.Button color="black" content="검색" />
      </Form.Group>
    </Form>
  )
}

export default SearchText
