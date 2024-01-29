const express = require('express')
const route = express.Router()
const pool = require('../utils/db')
const { generateToken } = require('../middleware/auth')
const { compare } = require('../middleware/bcrypt')

/*  
Request Login Method post
@body {string} username, password
*/
route.post('/', async (req, res) => {
    const {username, password} = req.body

    try {
        const query = await pool.query(`SELECT id, username, password FROM public.users WHERE username = '${username}'`)

        // Check a password
        const match = await compare(password, query.rows[0].password)

        if(match) {
            res.status(200).json({
                status: "success",
                accesstoken: generateToken({
                    username: username,
                    password: password
                }),
                message: "data is correct"
            })
        } else {
            res.status(404).json({
                status: "error",
                message: "not found"
            })
        }
    } catch (error) {
        res.status(400).json({
            status: "error",
            message: "invalid request"
        })
    }
})

module.exports = route