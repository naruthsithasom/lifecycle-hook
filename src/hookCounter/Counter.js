import React, { Component} from 'react'
import { Link } from 'react-router-dom'
// การใข้ setState แบบ this.state ใช้ได้ใน Class 
//ใช้แบบ Hook useState ดีกว่า
export class Counter extends Component {
  state = {
    count: 0,
  }
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
          <h3>{ this.state.count } </h3>
          <button onclick={() => this.setState({ count: this.state.count + 1 })}>+</button>
          <button onclick={() => this.setState({ count: this.state.count - 1 })}>-</button>
          <button onClick={() => this.setState({ count: 0 })}>reset</button>
        </div>
      </div>
    )
  }
}
export default Counter

