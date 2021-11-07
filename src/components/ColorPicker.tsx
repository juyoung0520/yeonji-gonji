import styled from '@emotion/styled'
import React, { useState } from 'react'
import { ChromePicker, CirclePicker, Color, ColorResult } from 'react-color'

const Container = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
// const CircleContainer = styled.div`
//   width: 252px;
//   display: flex;
//   flex-wrap: wrap;
//   margin-right: -14px;
//   margin-bottom: -14px;
// `
// const ColorCircle = styled.span<{ hex: string }>`
//   background: ${(props) => props.hex};
//   height: 28px;
//   width: 28px;
//   margin-right: 14px;
//   margin-bottom: 14px;
//   cursor: pointer;
//   outline: none;
//   border-radius: 50%;
//   transform: scale(1);
//   transition: box-shadow 100ms ease 0s;
//   :hover {
//     transform: scale(1.2);
//   }
// `
// const ClickCircle = styled.span<{ visibility: string }>`
//   position: absolute;
//   background: #ffffff;
//   height: 28px;
//   width: 28px;
//   margin-right: 14px;
//   margin-bottom: 14px;
//   cursor: pointer;
//   outline: none;
//   border-radius: 50%;
//   z-index: 10px;
//   transform: scale(0.8);
//   visibility: ${(props) => props.visibility};
// `

const colors = [
  '#A24C55',
  '#B23D33',
  '#8E3332',
  '#A33945',
  '#A04037',
  '#E56C63',
  '#D46667',
  '#E95B59',
  '#EB9280',
  '#D2767B',
  '#DB2148',
  '#E0374C',
  '#A62333',
  '#BD314C',
  '#81212F',
  '#DA3C31',
  '#C22538',
  '#000000',
  // '#BC363D',
]

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState<Color>('')

  const handleChange = (color: ColorResult) => {
    setSelectedColor(color.hex)
    colors[colors.length - 1] = color.hex
  }

  return (
    <Container>
      <CirclePicker colors={colors} onChange={(color) => handleChange(color)} />
      {/* <CircleContainer>
        {colors.map((color, index) => (
          <ColorCircle key={index} hex={color} >
            <ClickCircle visibility="hidden" />
          </ColorCircle>
        ))}
      </CircleContainer> */}
      <ChromePicker
        color={selectedColor}
        onChange={(color) => handleChange(color)}
        disableAlpha={true}
      />
    </Container>
  )
}

export default ColorPicker
