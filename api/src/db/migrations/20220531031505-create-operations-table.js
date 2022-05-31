'use strict'

const { OPERATIONS_TABLE } = require('../models/operations.model')
const { USER_TABLE } = require('../models/user.model')

const { DataTypes, Sequelize } = require('sequelize')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(OPERATIONS_TABLE, {
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
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'user_id',
        references: {
          model: USER_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable(OPERATIONS_TABLE)
  }
}
