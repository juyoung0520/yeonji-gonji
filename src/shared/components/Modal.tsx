import styled from '@emotion/styled'
import React, { FunctionComponent, ReactNode, useState } from 'react'
import { Button, Modal as SemanticUIModal } from 'semantic-ui-react'

import close from '@/drawables/close.png'

interface ComponentProps {
  trigger: ReactNode
  header: string
  hasCloseIcon?: boolean
  content: FunctionComponent<{ onClick?: () => void }>
  size?: 'small' | 'large' | 'mini' | 'tiny' | 'fullscreen'
  actionType?: 'one' | 'two'
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 18px;
  }
`
const ContentContainer = styled.div`
  margin: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CloseIcon = styled.button<{ imgUrl: string }>`
  width: 15px;
  height: 15px;
  border: none;
  background-color: transparent;
  background-size: cover;
  background-image: url(${(props) => props.imgUrl});
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

function Modal({
  trigger,
  header,
  hasCloseIcon,
  content: Content,
  size = 'small',
  actionType,
}: ComponentProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <SemanticUIModal
      size={size}
      open={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      dimmer="blurring"
      trigger={trigger}
    >
      <SemanticUIModal.Header>
        <HeaderContainer>
          <span>{header}</span>
          {hasCloseIcon && (
            <CloseIcon
              name="close"
              imgUrl={close}
              onClick={() => setIsOpen(false)}
            />
          )}
        </HeaderContainer>
      </SemanticUIModal.Header>
      <SemanticUIModal.Content>
        <ContentContainer>
          <Content onClick={() => setIsOpen(false)} />
        </ContentContainer>
      </SemanticUIModal.Content>
      {actionType && (
        <SemanticUIModal.Actions>
          {actionType === 'one' ? (
            <Button
              content="검색"
              color="black"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <>
              <Button content="취소" onClick={() => setIsOpen(false)} />
              <Button
                content="확인"
                color="black"
                onClick={() => setIsOpen(false)}
              />
            </>
          )}
        </SemanticUIModal.Actions>
      )}
    </SemanticUIModal>
  )
}

export default Modal
