const express = require('express')
const route = express.Router()

const user = [
    // Password 123
    {id: 1, username: "john", password: "$2b$10$72oFwwNUqNng8/eAAusq2O/jHc8IcaEFIkHuTMhvWG0JW1gJJUkeK"}
]

// Saving Userto local
route.use((req, res, next) => {
    req.locals = req.locals || {}
    req.locals.user = user
    next()
})

route.get('/', (req, res) => {
    res.send("Welcome user auth system")
})

route.use('/login', require('./login'))

module.exports = route