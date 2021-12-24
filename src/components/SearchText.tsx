import styled from '@emotion/styled'
import React, { FormEvent, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'semantic-ui-react'

const Input = styled(Form.Input)`
  width: 300px;
`
interface Props {
  onClick?: () => void
}

function SearchText({ onClick }: Props) {
  const [keyword, setKeyword] = useState<string>('')
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleFromOnSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      setKeyword('')

      if (onClick) {
        onClick()
      }

      if (!inputRef.current) {
        return
      }

      inputRef.current.click()
    },
    [],
  )

  const handleKeyWordChange = useCallback(
    (target: EventTarget & HTMLInputElement) => {
      setKeyword(target.value)
    },
    [],
  )

  return (
    <>
      <Form onSubmit={handleFromOnSubmit}>
        <Form.Group>
          <Input
            type="text"
            value={keyword}
            required
            placeholder="제품 검색"
            onChange={(event) => handleKeyWordChange(event.target)}
          />
          <Form.Button typed="submit" color="black" content="검색" />
        </Form.Group>
      </Form>
      <Link
        to={{
          pathname: '/searchResult',
          state: { value: keyword, isColor: false },
        }}
      >
        <input ref={inputRef} hidden />
      </Link>
    </>
  )
}

export default SearchText
