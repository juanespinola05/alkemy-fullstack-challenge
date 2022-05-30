const usersRouter = require('express').Router()
const { handleValidation } = require('../middlewares/validation.handler')
const { registerUserSchema } = require('../schemas/users.schema')
const { UserService } = require('../services/users.service')

const service = new UserService()

usersRouter.get('/', async (req, res, next) => {
  try {
    const users = await service.find()
    res.status(200).json(users)
  } catch (error) {
    next(error)
  }
})

usersRouter.post('/register',
  handleValidation(registerUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const newUser = await service.create(req.body)
      res.status(201).json({
        message: 'User created',
        ...newUser.dataValues
      })
    } catch (error) {
      next(error)
    }
  }
)

module.exports = { usersRouter }
