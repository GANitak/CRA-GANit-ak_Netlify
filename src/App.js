import React, { Component } from "react"
import logo from "./logo.svg"
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

// class Twitch extends Component {
//   render(){
//     return(
//       <div className="TwitchCounter">
//         <header className="Counter-header">
//          <button onClick={counter}> Tell me that you are here</button>
//         </header>
//           <Twitch/>
//        </div>
//            )
//    }
// } 

// function Form() {
//   function handleSubmit(e) {
//     e.preventDefault();    console.log('You clicked submit.');
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }


export default App
