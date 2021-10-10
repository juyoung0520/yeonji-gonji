import styled from '@emotion/styled'
import React, { FunctionComponent, useState } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'

import CardButton from '@/components/CardButton'
import heart from '@/drawable/heart.png'

interface Props {
  content: FunctionComponent
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

function SearchModal({ content: Content }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      open={open}
      dimmer="blurring"
      size="small"
      trigger={
        <CardButton
          src={heart}
          header="색상 검색"
          discription="색상을 선택하여 검색합니다."
        />
      }
    >
      <Modal.Header>
        <HeaderContainer>
          <span>색상 검색</span>
          <Icon name="close" />
        </HeaderContainer>
      </Modal.Header>
      <Modal.Content>
        <Content />
      </Modal.Content>
      <Modal.Actions>
        <Button />
      </Modal.Actions>
    </Modal>
  )
}

export default SearchModal
