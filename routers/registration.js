const express = require('express')
const bcrypt = require('bcrypt')
const route = express.Router()
const pool = require('../utils/db')

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
        
            res.send('succes')
        } else {
            res.send('failed')
        }
    } catch (error) {
        res.send(error)
    }
})


module.exports = route