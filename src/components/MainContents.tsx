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
            header="색상 선택"
            discription="색상 선택해주세용."
          />
        }
        header="헤더"
        hasCloseIcon={true}
        content={UploadImage}
        action="no"
      />
      <Modal
        trigger={
          <CardButton
            src={heart}
            header="색상 선택"
            discription="색상 선택해주세용."
          />
        }
        header="헤더"
        hasCloseIcon={true}
        content={UploadImage}
        action="no"
      />
      <Modal
        trigger={
          <CardButton
            src={heart}
            header="색상 선택"
            discription="색상 선택해주세용."
          />
        }
        header="헤더"
        hasCloseIcon={true}
        content={UploadImage}
        action="no"
      />
    </Container>
  )
}

export default MainContents
