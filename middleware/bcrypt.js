const bcrypt = require('bcrypt')

/* 
@arg {string} str, hash 
*/
function compare(str, hash) {
    return bcrypt.compare(str, hash)
}

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

module.exports = {compare, encryption}