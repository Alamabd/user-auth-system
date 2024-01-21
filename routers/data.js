const express = require('express')
const jwt = require('jsonwebtoken')

const route = express.Router()

route.get('/', (req, res) => {
    const {token} = req.query

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Invalid accesstoken" })
        } else {
            const result = {...decoded, password: '123'}
            res.json(result);
        }
    });

})

module.exports = route