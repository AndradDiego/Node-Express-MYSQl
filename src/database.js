const pg = require('pg');


const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'banco',
    password: 'docker',
    port: 5432,

})
module.exports = pool