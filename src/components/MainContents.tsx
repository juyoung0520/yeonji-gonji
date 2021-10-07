import styled from '@emotion/styled'
import React from 'react'

import SearchColorModal from '@/components/SearchColorModal'
import SearchImageModal from '@/components/SearchImageModal'
import SearchTextModal from '@/components/SearchTextModal'

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
      <SearchColorModal />
      <SearchImageModal />
      <SearchTextModal />
    </Container>
  )
}

export default MainContents
