import React, { Component, StyleSheet } from 'react'
import { Link } from 'react-router-dom'

export class Counter extends Component {
  render() {

    const Styles = {
      Item1: {
        paddingTop: 10,
        color: '#00ff00',
        textAlign: "center"
      },
      Item2: {
        padding: 10,
        textDecoration: 'none'
      }
    }

    return (
      <div style={{
        backgroundColor: "#ccc",
        paddingBottom: 10,
        margin: 0
      }}>

        <h1 style={Styles.Item1}>Hook Counter page</h1><br />
        <Link to='/' style={Styles.Item2}>Home</Link>
        <Link to="/todo" style={Styles.Item2}>Todo</Link>
      </div>
    )
  }
}
export default Counter

