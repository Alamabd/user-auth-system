const jwt = require('jsonwebtoken')

/* Arg {string} data */
function generateToken(data) {
    const expire = 60 * 60
    const token = jwt.sign(data, process.env.SECRET_KEY, {expiresIn: expire});
    return token;
}

module.exports = generateToken;