import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Detail, Like, Login, Main, Signup } from '@/pages/PageIndex'
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/like" component={Like} />
      <Route path="/detail/:name" component={Detail} />
    </BrowserRouter>
  )
}

export default App
