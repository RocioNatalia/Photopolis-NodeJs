const Sequelize = require ('sequelize')
const connection = require ('../sql')

const User=  connection.define('user' ,{
    username: {
        type :Sequelize.STRING,
        allowNull : false ,
        unique : true ,

    },
    mail: {
        type :Sequelize.STRING,
        allowNull : false,
        unique: true
        
    } ,
    password:{
        type :Sequelize.STRING,
        allowNull : false ,
        
    }
})
    
module.exports = User