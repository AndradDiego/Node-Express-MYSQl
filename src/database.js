const pg = require('pg');
const mysql = require('mysql2/promise')


const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'banco',
    password: 'docker',
    port: 5432,

})
const mysqlconection = mysql.createPool({
    user: 'root',
    host: 'localhost',
    database: 'banco',
    password: 'docker',
    port: 3306
})

module.exports = { pool, mysqlconection }