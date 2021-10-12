import styled from '@emotion/styled'
import React, { ChangeEvent, useRef, useState } from 'react'
import { Button } from 'semantic-ui-react'

const Text = styled.span`
  margin: 0 20px;
`
function UploadImage() {
  const [fileName, setFileName] = useState<string>()
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
    setFileName(file.name)
  }

  return (
    <>
      <Text>{fileName ? fileName : '선택된 이미지가 없습니다.'}</Text>
      <Button
        size="medium"
        color="black"
        content="이미지 업로드"
        onClick={handleButtonOnClick}
      />
      <input
        ref={inputRef}
        type="file"
        accept="image/jpg, image/jpeg"
        hidden
        onChange={handlefileChange}
      />
    </>
  )
}

export default UploadImage
