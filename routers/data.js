const express = require('express')
const { verifyToken } = require('../middleware/auth')

const route = express.Router()

route.get('/', (req, res) => {
    const {accesstoken} = req.query

    verifyToken(accesstoken, (result) => {
        if(result) {
            // provide data to users
            return res.status(200).json({ 
                status: 'succes',
                data: result
            })
        } else {
            return res.status(401).json({ 
                status: 'error',
                error: "Invalid accesstoken",
            })
        }
    })
})

module.exports = route