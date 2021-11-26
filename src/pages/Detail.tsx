import React, { FC } from 'react'
import { ReactComponentElement } from 'react-router/node_modules/@types/react'
import { RouteComponentProps } from 'react-router-dom'

import DetailBox from '@/components/DetailBox'
import Layout from '@/components/Layout'
import TopBar from '@/components/TopBar'
export interface State {
  key: number
  brand: string
  imgUrl: string
  name: string
  price: string
}

function Detail({ location }: RouteComponentProps) {
  const state = location.state as State

  return (
    <Layout>
      <TopBar />
      <DetailBox {...state} />
    </Layout>
  )
}
export default Detail
