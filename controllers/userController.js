const User = require('../models/user.js')

//Encontrar el usuario por URL
const findUserById = async (req, res) => {
    let id = req.params.id;
    let usuario = await User.findOne({ where: { id: id } })
    if (usuario !== null) {
        res.json({ result: usuario })
    } else {
        res.json({ response: 'not found' })
    }

}

//Registro
const register = async (req, res) => {
    const { username, mail, password } = req.body

    const usuario = await User.create({ username, mail, password })

    res.json({ response: usuario })
}

//Log In
const login = async (req, res) => {
    const { mail, password } = req.body
    let usuario = await User.findOne({ where: { mail } })
    if (usuario !== null) {
        usuario = usuario.dataValues
        if (usuario.password === password) {
            res.json({ result: usuario })
        }
    } else {
        res.json({ error: 'not found' })
    }

}

module.exports = {
    findUserById,
    register,
    login,
}
