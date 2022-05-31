const { Sequelize, Model, DataTypes } = require('sequelize')

const OPERATIONS_TABLE = 'operations'

const OperationSchema = {
  id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  concept: {
    allowNull: false,
    type: DataTypes.STRING
  },
  amount: {
    allowNull: false,
    type: DataTypes.FLOAT
  },
  date: {
    allowNull: false,
    type: DataTypes.DATE
  },
  type: {
    allowNull: false,
    type: DataTypes.STRING,
    isIn: [['income', 'outflow']]
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: 'created_at'
  }
}

class Operation extends Model {
  static associate (models) {}
  static config (sequelize) {
    return {
      sequelize,
      tableName: OPERATIONS_TABLE,
      modelName: 'Operation',
      timestamps: false
    }
  }
}

module.exports = { OPERATIONS_TABLE, OperationSchema, Operation }
