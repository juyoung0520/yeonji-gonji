import React from 'react'
import {
  Grid as SemanticUIGrid,
  Image,
  SemanticWIDTHS,
} from 'semantic-ui-react'

import { Product } from '@/shared/types'

interface Props {
  data: Product[]
  columns: SemanticWIDTHS | 'equal'
}

function Grid({ columns, data }: Props) {
  return (
    <SemanticUIGrid relaxed>
      <SemanticUIGrid.Row columns={columns}>
        {data.map((item, index) => (
          <SemanticUIGrid.Column key={index}>
            <Image src={item.image} />
          </SemanticUIGrid.Column>
        ))}
      </SemanticUIGrid.Row>
    </SemanticUIGrid>
  )
}

export default Grid
