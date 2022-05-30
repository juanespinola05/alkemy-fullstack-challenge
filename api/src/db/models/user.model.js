const { Model, Sequelize, DataTypes } = require('sequelize')

const USER_TABLE = 'users'

const UserSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: 'created_at'
  }
}

class User extends Model {
  static associate (models) {}
  static config (sequelize) {
    return {
      sequelize,
      modelName: 'User',
      tableName: USER_TABLE,
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User }
