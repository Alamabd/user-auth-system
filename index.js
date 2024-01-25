require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = process.env.PORT

app.use(bodyparser.json())

// Database
const user = [
    // Password 123
    {id: 1, username: "john", password: "$2b$10$72oFwwNUqNng8/eAAusq2O/jHc8IcaEFIkHuTMhvWG0JW1gJJUkeK"}
]

// Saving Userto local
app.use((req, res, next) => {
    req.locals = req.locals || {}
    req.locals.user = user
    next()
})


app.use('/', require('./routers'))

// Error Handling
app.use((req, res, next) => {
    const err = new Error('Not found')
    err.status = 404
    next(err)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send(`Error: ${err.message}`)
})

app.listen(port, () => {
    console.log('server running in port http://localhost:3000');
})