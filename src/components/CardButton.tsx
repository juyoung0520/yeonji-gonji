import styled from '@emotion/styled'
import React from 'react'
import { Header } from 'semantic-ui-react'

const Container = styled.div`
  height: 833.3px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const CardContainer = styled.div`
  width: 320px;
  height: 329.4px;
  min-height: 250px;
  border-radius: 8px;
  border: 1px solid LightGray;
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgb(0 0 0 / 20%);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow: hidden;
  :hover {
    transform: translate(-1px, -1px);
    box-shadow: 0px 2px 9px rgb(0 0 0 / 30%);
  }
`

interface ImgProps {
  src: string
}

const Img = styled.img<ImgProps>`
  height: 100px;
  src: ${(props) => props.src};
`

const Text = styled.span`
  font-size: 18px;
`
interface Props {
  src: string
  header: string
  discription: string
}

function CardButton({ src, header, discription, ...rest }: Props) {
  return (
    <Container {...rest}>
      <CardContainer>
        <Img src={src} />
        <Header size="huge" content={header} />
        <Text>{discription}</Text>
      </CardContainer>
    </Container>
  )
}

export default CardButton
