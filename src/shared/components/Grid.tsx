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
  itemComponent?: React.FunctionComponent<{ product: Product }>
}

function Grid({
  columns,
  data,
  previewMode,
  itemComponent: Item = ItemProduct,
}: Props) {
  return (
    <Container relaxed>
      <SemanticUIGrid.Row columns={columns}>
        {data.map((item, index) => (
          <SemanticUIGrid.Column key={index}>
            {previewMode ? <Image src={item.image} /> : <Item product={item} />}
          </SemanticUIGrid.Column>
        ))}
      </SemanticUIGrid.Row>
    </Container>
  )
}

export default Grid
