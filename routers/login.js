const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const route = express.Router()

route.post('/', (req, res) => {
    const body = req.body

    const expire = 60 * 60
    // Generate token
    const token = jwt.sign(user[0], process.env.SECRET_KEY, {expiresIn: expire});
    res.json({
        accesstoken: token
    })
})

module.exports = route