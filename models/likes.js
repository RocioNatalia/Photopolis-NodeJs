const Sequelize = require('sequelize')
const connection = require('../sql')

const Likes = connection.define('likes', {
    
    user_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    mail: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    urlLike: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Likes