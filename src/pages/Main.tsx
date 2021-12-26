import React from 'react'

import CardList from '@/components/CardList'
import Layout from '@/components/Layout'
import TopBar from '@/components/TopBar'

function Main() {
  return (
    <Layout>
      <TopBar />
      <CardList />
      {/* <Footer /> */}
    </Layout>
  )
}

export default Main
