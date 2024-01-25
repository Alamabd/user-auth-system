const express = require('express')
const jwt = require('jsonwebtoken')

const route = express.Router()

route.get('/', (req, res) => {
    const {accesstoken} = req.query

    console.log(accesstoken)

    jwt.verify(accesstoken, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Invalid accesstoken" })
        } else {
            const result = {...decoded, password: '123'}
            res.json(result);
        }
    });

})

module.exports = route