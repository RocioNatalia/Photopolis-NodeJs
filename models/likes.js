const Sequelize = require('sequelize')
const connection = require('../sql')

const Likes = connection.define('likes', {
    
    user_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    photo_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Likes