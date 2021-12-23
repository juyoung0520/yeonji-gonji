import styled from '@emotion/styled'
import React from 'react'

import CardButton from '@/components/CardButton'
import ColorPicker from '@/components/ColorPicker'
import SearchText from '@/components/SearchText'
import UploadImage from '@/components/UploadImage'
import color from '@/drawables/colorpalette.png'
import image from '@/drawables/image.png'
import text from '@/drawables/text.png'
import Modal from '@/shared/components/Modal'

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
  const greeting =
    '<p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/06/10003882_20200206152721.jpg" alt="" /></p><p><br /></p><p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/06/10003882_20200206152743.jpg" alt="" /></p><p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/06/10003882_20200206152754.jpg" alt="" /> </p><p><img src="http://mimg.lalavla.com/resources/images/prdimg/202002/18/10003882_20200218165027.jpg" alt="" /></p>'

  return (
    <Container>
      <Modal
        trigger={
          <CardButton
            src={color}
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
            src={image}
            header={SEARCH_IMAGE}
            discription="이미지를 업로드하여 검색합니다."
          />
        }
        size="small"
        header={SEARCH_IMAGE}
        hasCloseIcon={true}
        content={UploadImage}
      />
      <Modal
        trigger={
          <CardButton
            src={text}
            header={SEARCH_TEXT}
            discription="제품 정보를 입력하여 검색합니다."
          />
        }
        size="tiny"
        header={SEARCH_TEXT}
        hasCloseIcon={true}
        content={SearchText}
      />
      {/* <p dangerouslySetInnerHTML={{ __html: greeting }} /> */}
    </Container>
  )
}

export default CardList
