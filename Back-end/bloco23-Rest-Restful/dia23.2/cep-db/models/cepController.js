const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: process.env.USER_NAME,
  password: process.env.PASS,
  host: process.env.HOST,
  database: process.env.DB_NAME
});

module.exports = connection;
