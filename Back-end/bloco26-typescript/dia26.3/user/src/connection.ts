import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export default mysql.createPool({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
});
