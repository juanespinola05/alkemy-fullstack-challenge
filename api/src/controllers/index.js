const router = require('express').Router()

const { usersRouter } = require('./users.controller')
const { loginRouter } = require('./login.controller')

function setupRoutes (app) {
  app.use('/api', router)
  router.use('/users', usersRouter)
  router.use('/login', loginRouter)
}

module.exports = { setupRoutes }
