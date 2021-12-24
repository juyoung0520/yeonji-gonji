import styled from '@emotion/styled'
import React, {
  FunctionComponent,
  ReactNode,
  useCallback,
  useState,
} from 'react'
import { Link } from 'react-router-dom'
import { Button, Modal as SemanticUIModal } from 'semantic-ui-react'

import close from '@/drawables/close.png'
import { Keyword } from '@/shared/types'

interface ContentProps {
  onClick?: () => void
  onSetkeyword?: (keyword: Keyword) => void
}

interface ComponentProps {
  trigger: ReactNode
  header: string
  hasCloseIcon?: boolean
  content: FunctionComponent<ContentProps>
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
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [keyword, setKeyword] = useState<Keyword>({ value: '', isColor: true })

  const handleKeyword = useCallback((keyword: Keyword) => {
    setKeyword(keyword)
  }, [])

  const handleOnClose = useCallback(() => {
    setKeyword({ value: '', isColor: true })
    setIsOpen(false)
  }, [])

  return (
    <SemanticUIModal
      size={size}
      open={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={handleOnClose}
      dimmer="blurring"
      trigger={trigger}
    >
      <SemanticUIModal.Header>
        <HeaderContainer>
          <span>{header}</span>
          {hasCloseIcon && (
            <CloseIcon name="close" imgUrl={close} onClick={handleOnClose} />
          )}
        </HeaderContainer>
      </SemanticUIModal.Header>
      <SemanticUIModal.Content>
        <ContentContainer>
          <Content
            onClick={() => setIsOpen(false)}
            onSetkeyword={handleKeyword}
          />
        </ContentContainer>
      </SemanticUIModal.Content>
      {actionType && (
        <SemanticUIModal.Actions>
          {actionType === 'one' ? (
            <Link to={{ pathname: '/searchResult', state: keyword }}>
              <Button content="검색" color="black" onClick={handleOnClose} />
            </Link>
          ) : (
            <>
              <Button content="취소" onClick={handleOnClose} />
              <Button content="확인" color="black" onClick={handleOnClose} />
            </>
          )}
        </SemanticUIModal.Actions>
      )}
    </SemanticUIModal>
  )
}

export default Modal
