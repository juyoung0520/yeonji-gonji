import styled from '@emotion/styled'
import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

import CardButton from '@/components/CardButton'
import heart from '@/drawable/heart.png'

function SearchColorModal() {
  const [open, setOpen] = React.useState(false)

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
      actions={<Button onClick={() => setOpen(false)}>검색</Button>}
    ></Modal>
  )
}

export default SearchColorModal
