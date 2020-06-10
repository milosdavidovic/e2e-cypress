const express = require('express')
const bodyParser = require('body-parser')
const detectPort = require('detect-port')
const getDebugger = require('debug')
const cors = require('cors')

const debug = getDebugger('app')

async function start({port} = {}) {
  port = port || process.env.PORT || (await detectPort(3002))

  const app = express()
  app.use(cors())
  app.use(bodyParser.json())

  app.post('/user', (req, res) => {
    const user = req.body
    return res.json({...user})
  })

  return new Promise(resolve => {
    const server = app.listen(port, () => {
      debug(`Listening on port ${server.address().port}`)
      const originalClose = server.close.bind(server)
      server.close = () => {
        return new Promise(resolveClose => {
          originalClose(resolveClose)
        })
      }
      resolve(server)
    })
  })
}

module.exports = {start}
