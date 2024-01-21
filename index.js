require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = process.env.PORT
console.log(port);

app.use(bodyparser.json())

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