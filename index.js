const express = require('express')
const app = express()
const port = 3000

app.use('/', require('./routers'))

app.listen(port, () => {
    console.log('server running in port http://localhost:3000');
})