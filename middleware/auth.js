const jwt = require('jsonwebtoken')

/* Arg {string} data */
function generateToken(data) {
    const expire = 60 * 60
    const token = jwt.sign(data, process.env.SECRET_KEY, {expiresIn: expire})
    return token
}

/* Arg {string} token, {object / boolean} callback */
function verifyToken(token, callback) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            callback(false)
        } else {
            callback(decoded)
        }
    });
}

module.exports = {generateToken, verifyToken}