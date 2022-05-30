const express = require('express')
const { port } = require('./config/config')

const app = express()

app.get('/', (req, res) => {
  res.send('T-Finanance API')
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
