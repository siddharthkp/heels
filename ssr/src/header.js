import React from 'react'
import heels from './heels.js'

const classname = heels(`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
  > img {
    height: 80px;
    animation: App-logo-spin infinite 20s linear;
  }
  > h1 { font-size: 1.5em }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

`)

const Header = () => (
  <header className={classname}>
    <img src="/static/logo.svg" alt="logo" />
    <h1>Welcome to React</h1>
  </header>
)

export default Header
