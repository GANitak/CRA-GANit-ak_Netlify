import React, { Component } from "react"
import IMGanit from "./IMGanit.svg"
import "./App.css"


class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
      
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={IMGanit} className="App-svglogo" alt="facelogo" />
          </header>
          <textblock>
          <h2>Welcome to GANit_ak.io</h2>
      <br/> :: What they do :: <br/>
        **web & mobile app development** 
  (front end) & back end<br/>
          <code>Happy times</code> G0 after that.
          </textblock>
          <LambdaDemo />
      </div>
    )
  }
}

export default App