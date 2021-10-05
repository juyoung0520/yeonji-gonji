import React from 'react'

import Layout from '@/components/Layout'
import MainContents from '@/components/MainContents'
import TopBar from '@/components/TopBar'

function Main() {
  return (
    <Layout>
      <TopBar />
      <MainContents />
    </Layout>
  )
}

export default Main
