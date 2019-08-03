const express = require ('express')
const cors = require ('cors')
const api = require ('./routes/app.js')
const bodyParser = require ('body-parser')
const app = express()
const connection = require ('./sql.js')
var colors = require('colors')

connection
.authenticate()
.then(() => {
    console.log('conexion establecida'.yellow)
    app.use(cors())
    app.use(bodyParser.urlencoded({extended :false}))
    app.use(bodyParser.json())
    
    app.use('/api', api)
    app.listen(3001 , console.log('Sevidor funcionando'.blue))
})
.catch(err => console.log('no se puede establecer conexion'.red, err))

connection.sync().then(e => console.log('sync funcionando'.magenta))