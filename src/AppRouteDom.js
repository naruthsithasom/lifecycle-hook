import React from 'react'
import logoWeb from './logo.svg'
import './App.css'
import { Switch, Route, Link } from 'react-router-dom'
import { Counter } from './hookCounter/Counter'
import { TodoList } from './todoHook/TodoList'
import { UseStateCounter} from './hookCounter/UseStateCounter'

function AppRouteDom() {
  return (
    <Switch>
      <Route exact path="/">
        <Link to="/todo">Todo </Link>
        <Link to="/hook">Hook </Link>
        <Link to='/usestatecounter'>useStateCounter</Link>
        <div className="App">
          <header className="App-header">
            <img src={logoWeb} className="App-logo" alt="logo" />
          </header>
          <main>Main</main>
        </div>
      </Route>
      <Route path="/hook">
        <Counter />
      </Route>
      <Route path="/todo">
        <TodoList />
      </Route>
      <Route path='/usestatecounter'>
        <UseStateCounter/>
      </Route>
    </Switch>
  )
}

export default AppRouteDom