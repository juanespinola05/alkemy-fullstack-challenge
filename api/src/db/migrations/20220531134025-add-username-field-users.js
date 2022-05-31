'use strict'

const { USER_TABLE, UserSchema } = require('../models/user.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(USER_TABLE, 'username', {
      ...UserSchema.username
    })
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, 'username')
  }
}
