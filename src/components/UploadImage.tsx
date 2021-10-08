import styled from '@emotion/styled'
import React, { ChangeEvent, useRef, useState } from 'react'
import { Button } from 'semantic-ui-react'

const Container = styled.div`
  margin: 1.5rem;
  display: flex;
  align-items: center;
`

function UploadImage() {
  const [file, setFile] = useState<File>()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleButtonOnClick = () => {
    if (!inputRef.current) {
      return
    }

    inputRef.current.click()
  }

  const handlefileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files

    console.log('change')

    if (!files) {
      return
    }

    const file = files[0]
    console.log(file.name)
  }

  return (
    <Container>
      <Button
        size="medium"
        color="black"
        content="파일 선택"
        onClick={handleButtonOnClick}
      />
      <input
        ref={inputRef}
        type="file"
        accept="image/jpg, image/jpeg"
        hidden
        onChange={handlefileChange}
      />
    </Container>
  )
}

export default UploadImage
