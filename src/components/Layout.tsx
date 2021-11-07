import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

const Container = styled.div`
  background-color: #fff;
  min-height: 100vh;
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
