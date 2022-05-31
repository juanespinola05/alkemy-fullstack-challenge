const { UserSchema, User } = require('./user.model')
const { OperationSchema, Operation } = require('./operations.model')

function setupModels (sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Operation.init(OperationSchema, Operation.config(sequelize))

  User.associate(sequelize.models)
  Operation.associate(sequelize.models)
}

module.exports = { setupModels }
