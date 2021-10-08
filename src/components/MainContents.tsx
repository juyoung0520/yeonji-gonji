import styled from '@emotion/styled'
import React from 'react'

import SearchModal from '@/components/SearchModal'
import UploadImage from '@/components/UploadImage'

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
      <SearchModal content={UploadImage} />
      <SearchModal content={UploadImage} />
      <SearchModal content={UploadImage} />
    </Container>
  )
}

export default MainContents
