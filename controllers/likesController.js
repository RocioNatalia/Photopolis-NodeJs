const Likes = require('../models/likes.js')
const User = require('../models/user.js')

//permite que el usuario de likes 
const likesSet = async (req, res) => {

    const { user_id, mail, urlLike } = req.body
    const like = await Likes.create({ user_id, mail, urlLike })

    res.json({ response: like })
}

//mostrar los likes del usuario por pantalla
const likesGet = async (req, res) => {
    let id = req.params.id;a
    let usuario
    let usuario = await Likes.findAll({ where: { user_id: id } })

    console.log(usuario)

    if (usuario.length != 0) {
        res.json({ response: usuario })
    } else {
        res.json({ response: ' No ha dado ningun like' })
    }

}

module.exports = {
    likesGet,
    likesSet
}

