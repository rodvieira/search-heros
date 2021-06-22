  
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, Hero } from '@/pages'

const Router: React.FC = () =>{
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/hero" exact component={Hero} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router