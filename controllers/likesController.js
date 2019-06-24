const Likes = require('../models/likes.js')
const User = require('../models/user.js')

//permite que el usuario de likes 
const likesSet = async (req, res) => {

    const { user_id, mail, urlLike } = req.body
    const like = await Likes.create({ user_id, mail, urlLike })

    res.json({ response: like })
}


//mostrar los likes del usuario por pantalla
const likesGet = (req, res) => {
    res.json({ response: 'likes del usuario' })
}


module.exports = {
    likesGet,
    likesSet
}
