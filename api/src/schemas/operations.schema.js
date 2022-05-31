const Joi = require('joi')

const userId = Joi.number().integer()

const getOperationsSchema = Joi.object({
  userId: userId.required()
})

module.exports = { getOperationsSchema }
