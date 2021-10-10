import styled from '@emotion/styled'
import React from 'react'

import CardButton from '@/components/CardButton'
import Modal from '@/components/Modal'
import UploadImage from '@/components/UploadImage'
import heart from '@/drawable/heart.png'

const Container = styled.div`
  height: 833.3px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
function MainContents() {
  return (
    <Container>
      <Modal
        trigger={
          <CardButton
            src={heart}
            header="색상 검색"
            discription="색상을 선택하여 검색합니다."
          />
        }
        header="헤더"
        hasCloseIcon={true}
        content={UploadImage}
      />
      <Modal
        trigger={
          <CardButton
            src={heart}
            header="이미지 검색"
            discription="이미지를 업로드하여 검색합니다."
          />
        }
        size="tiny"
        header="헤더"
        hasCloseIcon={true}
        content={UploadImage}
      />
      <Modal
        trigger={
          <CardButton
            src={heart}
            header="텍스트 검색"
            discription="제품 정보를 입력하여 검색합니다."
          />
        }
        header="헤더"
        hasCloseIcon={true}
        content={UploadImage}
        actionType="two"
      />
    </Container>
  )
}

export default MainContents
