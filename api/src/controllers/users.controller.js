const usersRouter = require('express').Router()

usersRouter.get('/', (req, res) => {
  res.status(200).json({
    results: [
      {
        id: 1,
        name: 'Juan'
      }
    ]
  })
})

module.exports = { usersRouter }
