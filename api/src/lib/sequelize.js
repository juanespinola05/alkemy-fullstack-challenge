const { Sequelize } = require('sequelize')
const { setupModels } = require('../db/models')
const {
  dbUser,
  dbHost,
  dbPassword,
  dbPort,
  dbName
} = require('../config/config')

const USER = encodeURIComponent(dbUser)
const PASSWORD = encodeURIComponent(dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: console.log
})

setupModels(sequelize)

module.exports = sequelize
