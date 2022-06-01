const Joi = require('joi')

const name = Joi.string().min(2).max(50)
const username = Joi.string().alphanum().min(4).max(20)
const email = Joi.string().email()
const password = Joi.string().min(6)

const checkUsernameSchema = Joi.object({
  username: username.required()
})

const checkEmailSchema = Joi.object({
  email: email.required()
})

const registerUserSchema = Joi.object({
  name: name.required(),
  username: username.required(),
  email: email.required(),
  password: password.required()
})

module.exports = { registerUserSchema, checkUsernameSchema, checkEmailSchema }
