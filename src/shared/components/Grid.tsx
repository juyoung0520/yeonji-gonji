import styled from '@emotion/styled'
import React from 'react'
import {
  Grid as SemanticUIGrid,
  Image,
  SemanticWIDTHS,
} from 'semantic-ui-react'

import ItemProduct from '@/components/ItemProduct'
import { Product } from '@/shared/types'

const Container = styled(SemanticUIGrid)`
  padding: 0 20px 0 20px !important;
`

interface Props {
  data: Product[]
  columns: SemanticWIDTHS | 'equal'
  previewMode?: boolean
}

function Grid({ columns, data, previewMode }: Props) {
  return (
    <Container relaxed>
      <SemanticUIGrid.Row columns={columns}>
        {data.map((item, index) => (
          <SemanticUIGrid.Column key={index}>
            {previewMode ? (
              <Image src={item.image} />
            ) : (
              <ItemProduct product={item} />
            )}
          </SemanticUIGrid.Column>
        ))}
      </SemanticUIGrid.Row>
    </Container>
  )
}

export default Grid
