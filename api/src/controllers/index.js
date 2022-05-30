const router = require('express').Router()

const { usersRouter } = require('./users.controller')

function setupRoutes (app) {
  app.use('/api', router)
  router.use('/users', usersRouter)
}

module.exports = { setupRoutes }
