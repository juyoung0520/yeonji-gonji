import styled from '@emotion/styled'
import React from 'react'

import CardButton from '@/components/CardButton'
import SearchText from '@/components/SearchText'
import UploadImage from '@/components/UploadImage'
import heart from '@/drawables/heart.png'
import Modal from '@/shared/components/Modal'

import ColorPicker from './ColorPicker'

const Container = styled.div`
  padding: 150px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const SEARCH_COLOR = '색상 검색'
const SEARCH_IMAGE = '이미지 검색'
const SEARCH_TEXT = '텍스트 검색'

function CardList() {
  return (
    <Container>
      <Modal
        trigger={
          <CardButton
            src={heart}
            header={SEARCH_COLOR}
            discription="색상을 선택하여 검색합니다."
          />
        }
        size="small"
        header={SEARCH_COLOR}
        hasCloseIcon={true}
        content={ColorPicker}
        actionType="one"
      />
      <Modal
        trigger={
          <CardButton
            src={heart}
            header={SEARCH_IMAGE}
            discription="이미지를 업로드하여 검색합니다."
          />
        }
        size="tiny"
        header={SEARCH_IMAGE}
        hasCloseIcon={true}
        content={UploadImage}
      />
      <Modal
        trigger={
          <CardButton
            src={heart}
            header={SEARCH_TEXT}
            discription="제품 정보를 입력하여 검색합니다."
          />
        }
        size="tiny"
        header={SEARCH_TEXT}
        hasCloseIcon={true}
        content={SearchText}
      />
    </Container>
  )
}

export default CardList
