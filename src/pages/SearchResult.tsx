import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import Layout from '@/components/Layout'
import SearchResultBox from '@/components/SearchResultBox'
import TopBar from '@/components/TopBar'
import { Keyword } from '@/shared/types'

function SearchResult({ location }: RouteComponentProps) {
  const keyword = location.state as Keyword

  return (
    <Layout>
      <TopBar />
      <SearchResultBox keyword={keyword} />
    </Layout>
  )
}
export default SearchResult
