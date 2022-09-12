const config = require("config")
const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {

    if (req.method === 'OPTIONS') return next();

    try {
        const token = req.headers.authorization.split(' ')[1]

        if (!token) {
            return res.status(401).json({message: 'Token error'})
        }

        req.user = jwt.verify(token, config.get('secretKey'))

        next();


    } catch (e) {
        return res.status(200).json({message: 'Auth error'})
    }

}

