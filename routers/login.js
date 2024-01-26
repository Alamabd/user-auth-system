const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const route = express.Router()

route.post('/', (req, res) => {
    const body = req.body
})

module.exports = route