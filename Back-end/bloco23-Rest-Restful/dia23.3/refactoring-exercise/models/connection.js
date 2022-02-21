const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER_NAME,
  password: process.env.PASS,
  database: process.env.DATA_BASE,
});

module.exports = connection;
