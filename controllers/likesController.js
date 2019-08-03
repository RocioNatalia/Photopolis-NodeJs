const Likes = require('../models/likes.js')
const User = require('../models/user.js')

//permite que el usuario de likes 
const likesSet = async (req, res) => {
    
    const { user_id, photo_id, url } = req.body

    const likeIsUnique = () => {

        return Likes.count({where: { user_id, photo_id, url }})
                  .then(count => {
                    if(count != 0){
                      return false
                    }
                    return true
                  })
      }
    
      likeIsUnique()
      .then(likeUnique => {
        if (likeUnique === true) {
          Likes.create({ user_id, photo_id, url })
              .then(like => {
                res.json({response: like})
              });
        } else {
          res.send(false)
        }
      })

}

//mostrar los likes del usuario por pantalla
const likesGet =(req, res) => {
    let id = req.params.id;
    Likes.findAll({where: { user_id : id} })
    .then(likes => {
        if (likes.length != 0) {
                    res.json({ response: likes })
                } else {
                res.json({ response: []})
                }

    })
}


    //usando la tabla de usuarios creada
    // let usuario = await User.findOne({ where: { id: id } })

    // if (usuario !== null) {

    //     let usuarioLikes = await Likes.findAll({ where: { user_id: id } })
    //     if (usuarioLikes.length != 0) {
    //         res.json({ response: usuarioLikes })
    //     } else {
    //         res.json({ response: ' No ha dado ningun like' })
    //     }

    // }else {
    //     res.json({ response: ' Ese usuario no existe >:|' })
    // }


module.exports = {
    likesGet,
    likesSet,
}

