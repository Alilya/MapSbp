const Pool = require("pg").Pool;
const pool = new Pool({ 
    user: "postgres",
    password:"root",
    host:"localhost",
    port: 8080,
    database:"Map"

 });

module.exports = pool;
