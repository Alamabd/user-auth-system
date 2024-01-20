const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    res.send("Login page")
})

module.exports = route