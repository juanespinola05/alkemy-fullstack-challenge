'use strict'

const { OPERATIONS_TABLE, OperationSchema } = require('../models/operations.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(OPERATIONS_TABLE, 'userId', {
      ...OperationSchema.userId
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(OPERATIONS_TABLE, 'userId')
  }
}
