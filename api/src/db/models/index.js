const { UserSchema, User } = require('./user.model')
const { OperationSchema, Operation } = require('./operations.model')
const { CategorySchema, Category } = require('./category.model')

function setupModels (sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Category.init(CategorySchema, Category.config(sequelize))
  Operation.init(OperationSchema, Operation.config(sequelize))

  User.associate(sequelize.models)
  Category.associate(sequelize.models)
  Operation.associate(sequelize.models)
}

module.exports = { setupModels }
