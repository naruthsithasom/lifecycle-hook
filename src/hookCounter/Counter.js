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
        margin: 0
      }}>

        <h1 style={Styles.Item1}>Hook Counter page</h1><br />
        <Link to='/' style={Styles.Item2}>Home</Link>
        <Link to="/todo" style={Styles.item2}>Todo</Link>
      </div>
    )
  }
}
export default Counter

