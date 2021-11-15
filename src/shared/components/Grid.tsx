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
  previewMode?: boolean
}

function Grid({ columns, data, previewMode }: Props) {
  return (
    <SemanticUIGrid relaxed>
      <SemanticUIGrid.Row columns={columns}>
        {data.map((item, index) => (
          <SemanticUIGrid.Column key={index}>
            {previewMode && <Image src={item.image} />}
          </SemanticUIGrid.Column>
        ))}
      </SemanticUIGrid.Row>
    </SemanticUIGrid>
  )
}

export default Grid
