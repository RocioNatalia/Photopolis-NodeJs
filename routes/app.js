
const express = require ('express')
const api = express.Router()

const userController = require ('../controllers/userController.js')
const likesController = require ('../controllers/likesController.js')


api.get('/users/:id' , userController.findUserById)
api.post('/register' , userController.register)
api.post('/login' , userController.login)
api.get('/userlikes/:id' , likesController.likesGet)
api.post('/images' , likesController.likesSet)
api.delete('/delete' , likesController.deleLike)


module.exports = api
//es importante no exportar api como objeto


