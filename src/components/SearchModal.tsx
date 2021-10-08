import React, { FunctionComponent, useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'

import CardButton from '@/components/CardButton'
import heart from '@/drawable/heart.png'

interface Props {
  content: FunctionComponent
}

function SearchModal({ content: Content }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      open={open}
      dimmer="blurring"
      trigger={
        <CardButton
          src={heart}
          header="색상 검색"
          discription="색상을 선택하여 검색합니다."
        />
      }
    >
      <Modal.Header>색상 검색</Modal.Header>
      <Modal.Content>
        <Content />
      </Modal.Content>
      <Modal.Actions>
        <Button content="검색" color="black" onClick={() => setOpen(false)} />
      </Modal.Actions>
    </Modal>
  )
}

export default SearchModal
