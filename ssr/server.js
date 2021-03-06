/* express world */
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { gimmestyles } from './src/heels'
import App from './src/App'

/* initialise a server instance */
const server = express()

/* handle the request */
server.get('/', (req, res) => {
  const body = renderToString(<App />)
  const css = gimmestyles()
  res.end(`
    <html>
      <head><style>${css}</style></head>
      <body>${body}</body>
    </html>
  `)
})

/* handle static files */
server.use('/static', express.static('static'))

server.listen(3001, console.log('-----------Ready----------'))
