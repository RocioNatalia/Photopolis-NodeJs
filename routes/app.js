
const express = require ('express')
const api = express.Router()

const userController = require ('../controllers/userController.js')
const likesController = require ('../controllers/likesController.js')
const homeController = require ('../controllers/homeController.js')


api.get('/' , homeController.inicio)
api.get('/users/:id' , userController.findUserById)
api.post('/register' , userController.register)
api.post('/login' , userController.login)
api.get('/user/:id/likes' , likesController.likesGet)
api.post('/user/:id/likes' , likesController.likesSet)


module.exports = api
//es importante no exportar api como objeto


