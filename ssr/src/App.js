import React, { Component } from 'react'
import Header from './header'
import Intro from './intro'
import heels, { global } from './heels.js'

global(
  'body',
  `
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`
)

const classname = heels('text-align: center')

class App extends Component {
  render() {
    return (
      <div className={classname}>
        <Header />
        <Intro />
      </div>
    )
  }
}

export default App
