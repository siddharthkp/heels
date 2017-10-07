import React from 'react'
import heels from './heels.js'

const classname = heels('font-size: large')

const Intro = () => (
  <p className={classname}>
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
)

export default Intro
