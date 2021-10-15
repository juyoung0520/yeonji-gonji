import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import LikePage from '@/pages/LikePage'
import LoginPage from '@/pages/LoginPage'
import Main from '@/pages/Main'
import SignupPage from '@/pages/SignupPage'

function App() {
  return (
    // 서버에 있는 데이터를 가공 처리하는 페이지라면 HashRouter보다 BrowerRouter가 더 좋음
    // https://worker-k.tistory.com/entry/React-BrowserRouter%EC%99%80-HashRouter%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EC%A0%95%EB%A6%AC
    <BrowserRouter>
      <Route path="/" exact={true} component={Main} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/like" component={LikePage} />
    </BrowserRouter>
  )
}

export default App
