import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import DetailBox from '@/components/DetailBox'
import Layout from '@/components/Layout'
import TopBar from '@/components/TopBar'
import { Product } from '@/shared/types'

function Detail({ location }: RouteComponentProps) {
  const product = location.state as Product

  return (
    <Layout>
      <TopBar />
      <DetailBox product={product} />
    </Layout>
  )
}
export default Detail
