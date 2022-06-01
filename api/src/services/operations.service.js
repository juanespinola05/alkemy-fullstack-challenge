const { Op } = require('sequelize')
const { models } = require('../lib/sequelize')
const boom = require('@hapi/boom')
const months = require('../data/months')

class OperationsService {
  async create (data) {
    data.amount = parseFloat(data.amount)
    const newOperation = await models.Operation.create(data, {
      include: ['user']
    })
    if (!newOperation) throw boom.internal('Cant register operations now')
    return newOperation
  }

  async findByMonth ({ username, year, month, offset = 0, limit = 10 }) {
    const user = await models.User.findOne({
      where: {
        username
      }
    })

    const fromDate = new Date(`${month} 01, ${year} 00:00:00`)
    const toDate = new Date(`${month} ${months[month].days}, ${year} 23:59:59`)

    const operations = await models.Operation.findAll({
      where: {
        date: {
          [Op.gte]: fromDate,
          [Op.lte]: toDate
        },
        userId: user.id
      },
      offset,
      limit
    })
    return operations
  }
}

module.exports = { OperationsService }
