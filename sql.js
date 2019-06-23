const Sequelize = require('sequelize')

const connection = new Sequelize('coderhouse', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection