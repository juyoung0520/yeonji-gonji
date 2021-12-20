import React from 'react'

import Layout from '@/components/Layout'
import SearchResultBox from '@/components/SearchResultBox'
import TopBar from '@/components/TopBar'

function SearchResult() {
  return (
    <Layout>
      <TopBar />
      <SearchResultBox />
    </Layout>
  )
}
export default SearchResult
