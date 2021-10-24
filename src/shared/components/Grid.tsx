import React, { ReactNode } from 'react'
import { Grid as SemanticUIGrid, SemanticWIDTHS } from 'semantic-ui-react'

import { Product } from '@/shared/types'

interface Props {
  item: ReactNode
  data: Product[]
  columns: SemanticWIDTHS | 'equal'
}

function Grid({ item: Item, columns, data }: Props) {
  return (
    <SemanticUIGrid relaxed>
      <SemanticUIGrid.Row columns={columns}>
        {data.map((item, index) => (
          <SemanticUIGrid.Column key={index}>
            <Item src={item.image} />
          </SemanticUIGrid.Column>
        ))}
      </SemanticUIGrid.Row>
    </SemanticUIGrid>
  )
}

export default Grid
