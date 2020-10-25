import React from 'react'
import logoWeb from './logo.svg'
import './App.css'
import { Switch, Route, Link } from 'react-router-dom'
import { Counter } from './hookCounter/Counter'
import { TodoList } from './todoHook/TodoList'
import { UseStateCounter} from './hookCounter/UseStateCounter'
import { TodoListUseState } from './todoHook/TodoListUseState'
import { TodoAddEditDelete } from './todoHook/TodoAddEditDelete'
import { FetchApi} from './Fetch/FetchApi'


function AppRouteDom() {
  return (
    <Switch>
      <Route exact path="/">
        <Link class="Margin" to="/todo">Todo</Link>
        <Link class="Margin" to="/hook">Hook</Link>
        <Link class="Margin" to='/usestatecounter'>Counter-useState</Link>
        <Link class="Margin" to='/todo-usestate'> Todo-useState</Link>
        <Link class="Margin" to="/todo-add-edit-delete">To-Addd Eddit Delete</Link>
        <Link class="Margin" to="/api">Fetch-API</Link>

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
      <Route path='/todo-usestate'>
        <TodoListUseState/>
      </Route>
      <Route path='/todo-add-edit-delete'>
        <TodoAddEditDelete />
      </Route>
      <Route path="/api">
        <FetchApi />
      </Route>
    </Switch>
  )
}

export default AppRouteDom