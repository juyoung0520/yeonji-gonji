import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

const Container = styled.div`
  background-color: grey;
  min-height: 100vh;
  height: 100%;
`

const Content = styled.div`
  max-width: 1268.8px;
  margin: 0 auto;
  background-color: White;
  padding: 1.5rem;
`
interface ComponentProps {
  children: ReactNode
}

function Layout({ children }: ComponentProps) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  )
}

export default Layout
