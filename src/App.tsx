import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import {
  Detail,
  Like,
  Login,
  Main,
  SearchResult,
  Signup,
  User,
} from '@/pages/PageIndex'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/like" component={Like} />
      <Route path="/detail" component={Detail} />
      <Route path="/user" component={User} />
      <Route path="/searchResult" component={SearchResult} />
    </BrowserRouter>
  )
}

export default App
