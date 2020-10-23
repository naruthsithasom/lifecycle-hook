import React, { Component } from 'react'

export class Article extends Component {
  render() {
    console.log('[Article.js] Render')
    return (
      <i>
        {this.props.article}
      </i>
    )
  }
}

export default Article
