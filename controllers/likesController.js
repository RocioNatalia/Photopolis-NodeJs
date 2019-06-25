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
    let id = req.params.id;
    let usuario = await User.findOne({ where: { id: id } })

    if (usuario !== null) {

        let usuarioLikes = await Likes.findAll({ where: { user_id: id } })
        if (usuarioLikes.length != 0) {
            res.json({ response: usuarioLikes })
        } else {
            res.json({ response: ' No ha dado ningun like' })
        }

    }else {
        res.json({ response: ' Ese usuario no existe >:|' })
    }
}
module.exports = {
    likesGet,
    likesSet
}

