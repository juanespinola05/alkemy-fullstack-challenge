const { Sequelize } = require('sequelize')
const { setupModels } = require('../db/models')
const { dbUrl, isProd } = require('../config/config')

const config = {
  dialect: 'postgres',
  logging: isProd ? false : console.log,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: !isProd
    }
  }
}

const sequelize = new Sequelize(dbUrl, config)

setupModels(sequelize)

module.exports = sequelize
