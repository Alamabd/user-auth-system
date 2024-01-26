const express = require('express')
const bcrypt = require('bcrypt')
const route = express.Router()
const pool = require('../utils/db')
const generateToken = require('../middleware/auth')

/*  
Request Login Method post
@body {string} username, password
*/
route.post('/', async (req, res) => {    
    const {username, password} = req.body
    
    /* 
    @arg {string} data 
    */
    async function encryption(data) {
        const saltRounds = 10
        try {
            const hash = await bcrypt.hash(data, saltRounds)
            return hash
        } catch (error) {
            return false   
        }
    }
    
    
    try {
        const encryp = await encryption(password)
        if(encryption(username)) {    
            await pool.query(`INSERT INTO public.users(username, password)VALUES ('${username}', '${encryp}')`)
        
            res.status(201).json({
                status: "success",
                accesstoken: generateToken({
                    username: username,
                    password: password
                }),
                message: "data added successfully"
            })
        } else {
            res.status(500).json({
                status: "error",
                message: "internal server error"
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