import React, { Component } from "react"
import IMGanit from "./IMGanit.svg"
import "./App.css"
import { Link } from 'react-router-dom'



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
      <container>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <br />
        <span>{msg}</span>
      </container>
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
          <section>
          <h2>Welcome to GANit_ak.io</h2>
          <container-text>
      :: What they do :: <br/>
        <em>web & mobile app development<br/></em>
        (front end) & back end<br/>
          <strong><code>Happy times G0 after that.</code></strong>
          </container-text>
          </section>
          <br/>
          <LambdaDemo />
      </div>
    )
  }
}

export default App