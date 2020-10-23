import React, {Component,StyleSheet} from 'react'
import {Link} from 'react-router-dom'

export class Counter extends Component{
  render(){

    const TextH1 = {
    Item1:{
        paddingTop: 40,
        color: '#00ff00',
        textAlign: "center"
      }
    }

    return(
      <div style={{
        backgroundColor: "#ccc",
        paddingBottom: 20
        }}>

      <h1 style={ TextH1.Item1 }>Counter page</h1><br/>
      <Link to='/'>Home || </Link>
      <Link to="/todo">Todo </Link>
      </div>
    )
  }
}
export default Counter

