import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Like from '@/pages/Like'
import Login from '@/pages/Login'
import Main from '@/pages/Main'
import Signup from '@/pages/Signup'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/like" component={Like} />
    </BrowserRouter>
  )
}

export default App
