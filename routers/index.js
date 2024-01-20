const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    res.send("Welcome user auth system")
})

route.use('/login', require('./login'))

module.exports = route