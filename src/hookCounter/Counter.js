import React, { Component, useState} from 'react'
import { Link } from 'react-router-dom'

export class Counter extends Component {
  render() {

    const Styles = {
      Item1: {
        paddingTop: 10,
        color: '#00ff00',
        textAlign: "center"
      },
      item2: {
        padding: 10,
        textDecoration: 'none',
        color: '#ff0004'
      }
    }

    let [count, counterUpdate] = useState(0)//ตั้งต้นเท่า count = 0

    return (
      <div style={{
        backgroundColor: "#ccc",
        paddingBottom: 10,
        margin: 0,
        textAlign: "center"
      }}>

        <h1 style={Styles.Item1}>Hook Counter page</h1><br />
        <Link to='/' style={Styles.Item2}>Home</Link>
        <Link to="/todo" style={Styles.item2}>Todo</Link>
        <div>
          { count }
          <button onclick={() => counterUpdate(count + 1)}>+</button>
          <button onclick={() => counterUpdate(count - 1)}>-</button>
          <button onClick={() => counterUpdate(0)}>reset</button>
        </div>
      </div>
    )
  }
}
export default Counter

