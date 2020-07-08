import React from 'react'
import LoginPage from './Components/LoginPage/index'
import {Switch, Route, BrowserRouter, useHistory} from 'react-router-dom'
import RegisterPage from './Components/RegisterPage'
import PostsPage from './Components/FeedPage/FeedPage'
import PostsCard from './Components/PostsCard/PostsCard'

function Router() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <LoginPage />
        </Route>
        <Route exact path='/register'>
          <RegisterPage />
        </Route>
        <Route exact path='/timeline'>
          <PostsPage />
        </Route>
        <Route path='/'>
          <h3>Ops! Essa página não existe</h3>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router

