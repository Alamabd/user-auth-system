const { Pool } = require('pg')

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
    user: process.env.DBuser,
    host: process.env.DBhost,
    database: process.env.DBdatabase,
    password: process.env.DBpassword,
    port: process.env.DBport
});

module.exports = pool