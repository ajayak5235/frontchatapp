 const jwt = require('jsonwebtoken')
 const User = require('../model/user-model');


exports.authenticate = (req, res, next) => {
    try {
        const token = req.header('Authorization');
        const user = jwt.verify(token, 'secret');
        
        User.findByPk(user.id)
            .then(foundUser => {
                console.log(JSON.stringify(foundUser));
                req.user = foundUser;
                console.log('In authentication');
                next();
            })
            .catch(err => {
                console.log(err);
            });
    } catch (err) {
        console.log(err);
        return res.status(401).json({ success: false });
    }
};
