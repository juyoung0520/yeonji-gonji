import styled from '@emotion/styled'
import React from 'react'

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 63px;
  background-color: white;
  padding: 17px 16px 16px;
`
const HeartButton = styled.button`
  margin: 0;
  background-color: red;
`
function TopBar() {
  return (
    <div>
      <Header>
        <HeartButton />
      </Header>
    </div>
  )
}

export default TopBar
