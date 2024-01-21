const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const route = express.Router()

route.post('/', (req, res) => {
    const body = req.body
    const user = req.locals.user

    // Compare data body and user
    if(!body.username === user[0].username || !bcrypt.compareSync(body.password, user[0].password)) {
        return res.status(401).json({ error: "Invalid credentials" })
    }

    const token = jwt.sign(user[0], process.env.SECRET_KEY);
    res.json({
        accesstoken: token
    })
})

module.exports = route