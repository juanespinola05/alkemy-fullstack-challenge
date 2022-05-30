const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(2).max(50)
const email = Joi.string().email()
const password = Joi.string().min(6)

const getUserByIDSchema = Joi.object({
  id: id.required()
})

const registerUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required()
})

module.exports = { getUserByIDSchema, registerUserSchema }
