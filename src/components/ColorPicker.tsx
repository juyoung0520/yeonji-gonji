import styled from '@emotion/styled'
import React, { useState } from 'react'
import { ChromePicker, CirclePicker, Color, ColorResult } from 'react-color'

const Container = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
function ColorPicker() {
  const [color, setColor] = useState<Color>('')

  const handleChange = (color: ColorResult) => {
    setColor(color.hex)
  }

  return (
    <Container>
      <CirclePicker color={color} onChange={(color) => handleChange(color)} />
      <ChromePicker
        color={color}
        onChange={(color) => handleChange(color)}
        disableAlpha={true}
      />
    </Container>
  )
}

export default ColorPicker
