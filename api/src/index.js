const express = require('express')
const { port } = require('./config/config')
const { setupRoutes } = require('./controllers')
const { logErrors, handleSQLError, handleBoomError, handleError } = require('./middlewares/error.handler')

const app = express()
app.use(express.json())

setupRoutes(app)

app.get('/', (req, res) => {
  res.send('T-Finanance API')
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})

app.use(logErrors)
app.use(handleSQLError)
app.use(handleBoomError)
app.use(handleError)
