const Joi = require('joi')

const id = Joi.number().integer()

const getUserByIDSchema = Joi.object({
  id: id.required()
})

module.exports = { getUserByIDSchema }
