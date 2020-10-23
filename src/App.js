import React from 'react'
import './App.css'
import Article from './Component/Article'
class App extends React.Component {
  constructor(props){
    console.log("[App.js] Constructor")
    super(props)
    this.state = {
      isShow: true
    }
   this.onChangeVisible = this.onChangeVisible.bind(this)
  }

  static getDerivedStateFromProps(props, state){
    console.log("[App.js] Get Derived State From Props")
    return state
  }

  onChangeVisible(){
    this.setState(prevState => ({
      isShow: !prevState.isShow 
    }))
  }

  // วิธีนี้ให้ใช้ Allow function จะได้ไม่ต้อง bind ใน constructor
  /*
  onChangeVisible = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow 
    }))
  }
  */
  componentDidMount(){
    console.log("[App.js] Component Did Mount")
  }
  render(){
    console.log("[App.js] Render")
    return (
      <div className="Cus-text-center">
        <button onClick={this.onChangeVisible}>ON/OFF</button>
    {this.state.isShow ? <Article article="asdfasdfasdfadsfasdfadsfadfadfadfadfadfadfasdf สกดสหกดกหด" />:null}
      </div>
    )
  }
}

export default App