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
    decodedToken = jwt.verify(token, JWT_SECRET)
  } catch (error) {
    // avoid jwt exceptions
    return next(boom.unauthorized('Missing or invalid token'))
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
