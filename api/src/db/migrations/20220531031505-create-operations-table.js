'use strict'

const { OPERATIONS_TABLE, OperationSchema } = require('../models/operations.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(OPERATIONS_TABLE, OperationSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(OPERATIONS_TABLE, OperationSchema)
  }
}
