import styled from '@emotion/styled'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
const Container = styled.div``
function DetailBox(location: RouteComponentProps) {
  console.log(location)

  return <Container>hi</Container>
}

export default DetailBox
