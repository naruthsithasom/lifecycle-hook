import React, { Component } from 'react'

export class Article extends Component {
  static getDerivedStateFromProps(props, state){
    console.log("[Article.js] get derived state from props")
    return state
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[Article.js] should component update")
    return true
  }

  getSnapshotBeforeUpdate( pervProps, prevState){
    console.log("[Article.js] get snapshot for update")
    return { 
      x: 0,
      y: 0
    }
  }
  componentDidUpdate(pervProps, prevState, snapshot){
    console.log("[Article.js] component did update", snapshot)
  }
  render() {
    console.log('[Article.js] Render')
    return (
        <h1>{this.props.article}</h1>
    )
  }
}

export default Article
