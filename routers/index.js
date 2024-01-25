require('dotenv').config()
const express = require('express')
const rateLimit = require('express-rate-limit')
const route = express.Router()

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: process.env.LIMIT,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: (req, res) => {
        res.status(429).json({error: "too many requests please try again"})
    }
})

route.use(limiter)

route.get('/', (req, res) => {
    res.send("Welcome user auth system")
})

route.use('/data', require('./data'))

route.use('/login', require('./login'))

module.exports = route