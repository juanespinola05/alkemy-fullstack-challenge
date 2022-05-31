const operationsRouter = require('express').Router()
const { handleValidation } = require('../middlewares/validation.handler')
const { getOperationsSchema } = require('../schemas/operations.schema')
const { getUserFromToken } = require('../middlewares/getUserFromToken')

operationsRouter.get('/:month',
  handleValidation(getOperationsSchema, 'params'),
  getUserFromToken,
  async (req, res, next) => {
    const { month } = req.params
  }
)
