import React from 'react'
import logoWeb from './logo.svg'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import {Counter} from './hookCounter/Counter' 
import {TodoList} from './todoHook/TodoList'
import {Link} from 'react-router-dom'

function AppRouteDom(){
  return (
    <Switch>
      <Route exact path="/">
      <Link to="/todo">Todo </Link>
      <Link to="/hook">Hook </Link>
        <div className="App">
          <header className="App-header">
            <img src={logoWeb} className="App-logo" alt="logo"/>
          </header>
          <main>Main</main>
        </div>
      </Route>
      <Route path="/hook">
        <Counter/>
      </Route>
      <Route path="/todo">
        <TodoList/>
      </Route>
    </Switch>
  )
}

export default AppRouteDom