const { ValidationError } = require('sequelize')

const logErrors = (err, req, res, next) => {
  console.error(err)
  next(err)
}

const handleSQLError = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.message,
      errors: err.errors
    })
  }
  next(err)
}

const handleBoomError = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json({
      message: output.payload
    })
  }
  next(err)
}

const handleError = (err, req, res, next) => {
  res.status(500).json({
    message: err.message
  })
}

module.exports = { logErrors, handleSQLError, handleBoomError, handleError }
