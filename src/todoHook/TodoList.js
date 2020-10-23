import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>TodoList page</h1>
        <Link to="/">home </Link>
        <Link to="/hook">Hook</Link>
      </div>
    )
  }
}
export default TodoList