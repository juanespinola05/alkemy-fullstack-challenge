const usersRouter = require('express').Router()

usersRouter.get('/', (req, res) => {
  res.status(200).json({})
})

module.exports = { usersRouter }
