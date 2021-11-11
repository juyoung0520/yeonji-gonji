import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import DetailBox from '@/components/DetailBox'
import Layout from '@/components/Layout'
import TopBar from '@/components/TopBar'
interface Props {
  location: RouteComponentProps
}
const Detail: FC<Props> = ({ location }: Props) => {
  const { state }: any = location

  return (
    <Layout>
      <TopBar />
      <DetailBox {...location} />
    </Layout>
  )
}
export default Detail
