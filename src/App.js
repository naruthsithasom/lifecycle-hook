import React from 'react'
import './App.css'
import Article from './Component/Article'
class App extends React.Component {
  constructor(props) {
    console.log("[App.js] Constructor")
    super(props)
    this.state = {
      isShow: true,
      article: "Add text"
    }
    this.onChangeVisible = this.onChangeVisible.bind(this)
  }
  // วิธีนี้ให้ใช้ Allow function จะได้ไม่ต้อง bind ใน constructor
  /*
  onChangeVisible = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow 
    }))
  }
  */
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] Get Derived State From Props")
    return state
  }

  onChangeVisible() {
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }))
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] should component update")
    return true
  }

  getSnapshotBeforeUpdate(pervProps, prevState) {
    console.log("[App.js] get snapshot for update")
    return {
      x: 0,
      y: 0
    }
  }
  componentDidUpdate(pervProps, prevState, snapshot) {
    console.log("[App.js] componet did update", snapshot)
  }
  componentDidMount() {
    console.log("[App.js] Component Did Mount")
  }

  render() {
    console.log("[App.js] Render")
    return (
      <div className="Cus-text-center">
        <button onClick={this.onChangeVisible}>ON/OFF</button>
        <input value={this.state.article} onChange={(data) => this.setState({ article: data.target.value })} />
        {this.state.isShow ? <Article article={this.state.article} /> : null}
      </div>
    )
  }
}

export default App