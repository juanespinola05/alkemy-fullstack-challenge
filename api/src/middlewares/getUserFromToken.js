const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/config')

const getUserFromToken = (req, res, next) => {
  const authorizationHeader = req.get('authorization')
  let token = ''
  if (authorizationHeader && authorizationHeader.toLowerCase().startsWith('bearer')) {
    token = authorizationHeader.split(' ')[1]
  }

  const decodedToken = jwt.decode(token, JWT_SECRET)

  if (!token || !decodedToken.username) {
    res.status(401).json({
      error: 'Authorization error: token was not provided or invalidgetUserFromToken'
    })
  }
}
// !! finish this

module.exports = { getUserFromToken }
