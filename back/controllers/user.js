const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// signup function
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                userName : req.body.userName,
                userSurname : req.body.userSurname,
                email : req.body.email,
                password : hash,
                passwordConfirm : hash,
                profilePhotoUrl: '',
            })

            user.save()
                .then( () => res.status(201).json({ message : 'utilisateur crée' }))
                .catch(error => res.status(400).json({ error }))
        })
        .catch(error => res.status(500).json({ error }));


}
// login function 
exports.login = (req, res, next)=> {
    User.findOne({ email : req.body.email })
        .then(user => {
            if (user === null) {
                res.status(401).json({ message : 'mot de passe / mail incorrect' })
            } else {
                bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        if (!valid) { 
                            res.status(401).json({ message : 'mot de passe / mail incorrect' })
                        } else {
                            res.status(200).json({ 
                                userId: user._id,
                                token: jwt.sign(
                                    { userId : user._id },
                                    'RANDOM_TOKEN_SECRET',
                                    { expiresIn: '24h' }
                                ),
                                userSurname: user.userSurname,
                                userName: user.userName,
                                isAdmin: user.isAdmin,
                            })
                        }
                    })
                    .catch(error => { res.status(500).json({ error })})
            }
        })
        .catch(error => {res.status(500).json({ error })});
}

// get single user infos to display dynamically
exports.userInfos = ((req, res, next)=> {
    User.findOne({
        _id: req.params.id
    })
    .then((data)=> {res.status(200).json(data)})
    .catch((err)=> { res.status(400).json({ err })});
})

// update user infos (cover/profile photo ...)
exports.userUpdate = ((req, res, next) => {
    const oldUser = req.file ? {
        ...JSON.parse(req.body.data),
        profilePhotoUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    } : {
        ...req.body
    };
    User.findOne({
        _id: req.params.id
    })
    .then((user)=> {
        if(user.userId != req.auth.userId) {
            res.status(400).json({ message : 'Non-autorisé' })
        } else {
            User.updateOne({ _id: req.params.id}, {...oldUser, _id: req.params.id })
                .then(()=> res.status(200).json({ message : 'User modifié' }))
                .catch((err)=> res.status(401).json({ err }));
        }
    })
    .catch((err)=> res.status(400).json({ err }));
})