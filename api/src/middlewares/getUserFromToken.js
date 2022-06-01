const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/config')

const getUserFromToken = (req, res, next) => {
  const authorizationHeader = req.get('authorization')
  let token = ''
  let decodedToken

  if (authorizationHeader && authorizationHeader.toLowerCase().startsWith('bearer')) {
    token = authorizationHeader.split(' ')[1]
  }

  try {
    jwt.verify(token, JWT_SECRET, (error, decoded) => {
      if (error) throw error
      decodedToken = decoded
    })
  } catch (error) {
    const msg = error.name === 'TokenExpiredError'
      ? 'Token expired'
      : 'Missing or invalid token'
    return next(boom.unauthorized(msg))
  }

  if (!token || !decodedToken.username) {
    return next(boom.unauthorized('Missing or invalid token'))
  }

  req.user = {
    username: decodedToken.username,
    id: decodedToken.id
  }
  next()
}

module.exports = { getUserFromToken }
