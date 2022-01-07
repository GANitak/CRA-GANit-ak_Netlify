import React, { Component } from "react"
import IMGanit from "./IMGanit.svg"
//import styles from "./styles.css"

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
      <h2>Welcome to GANit_ak.io</h2>
      <br/> :: What they do :: <br/>

**web & mobile app development** 
  front end & back end<br/>
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
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App