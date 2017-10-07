import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import heels, { global } from './heels'

global(
  'body',
  `
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`
)

const classname = heels(`
  text-align: center;

  img {
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
  }

  h1 {
    font-size: 1.5em;
  }

  header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }

  @keyframes App-logo-spin {
    from { transform: rotate(0deg)}
    to {
      transform: rotate(360deg);
    }
  }

`)

class App extends Component {
  render() {
    return (
      <div className={classname}>
        <header>
          <img src={logo} alt="logo" />
          <h1>Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
