import styled from '@emotion/styled'
import React, { ChangeEvent, useRef, useState } from 'react'
import { Button as SemanticButton } from 'semantic-ui-react'

import lipstick from '@/drawables/lipstick.png'

const Container = styled.div`
  width: 100%;
  height: 329.4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const SelectedImage = styled.div`
  width: 50%;
  height: 100%;
  min-height: 250px;
  border-radius: 10px;
  border: 3px dashed LightGray;
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgb(0 0 0 / 20%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`
const ResultContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  span {
    font-size: 18px;
    font-weight: bold;
  }

  img {
    width: 120px;
    height: 120px;
  }

  Button {
    width: 100%;
  }
`

const Button = styled(SemanticButton)`
  width: 40%;
`

function UploadImage() {
  const [uploadImage, setUploadImage] = useState<string>()
  const [resultImage, setResultImage] = useState<string>()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleButtonOnClick = React.useCallback(() => {
    if (!inputRef.current) {
      return
    }

    inputRef.current.click()
  }, [])

  const handlefileChange = React.useCallback(
    //async
    (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files

      if (!files) {
        return
      }

      const file = files[0]

      // const formData = new FormData()
      // formData.append('file', file)
      // axios
      //   .post('api/uploadfile', formData)
      //   .then((res) => {setUploadImage()})
      //   .catch((err) => {
      //     console.log(err)
      //   })

      setUploadImage(URL.createObjectURL(file))
    },
    [],
  )

  return (
    <Container>
      <SelectedImage>
        {uploadImage ? <img src={uploadImage} /> : '선택된 이미지가 없습니다.'}
      </SelectedImage>
      {resultImage ? (
        <ResultContainer>
          <span>인공지능이 찾은 결과</span>
          <img src={lipstick} />
          <Button color="black" content="더 알아보기" />
        </ResultContainer>
      ) : (
        <Button
          color="black"
          content="이미지 업로드"
          onClick={handleButtonOnClick}
        />
      )}
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
