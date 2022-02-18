const connection = require('./connection');

const insertUser = async (firstName, lastName, email, password) => {
  const sql = `
    INSERT INTO users(first_name, last_name, email, password)
    VALUES (?, ?, ?, ?);
  `;
  const params = [firstName, lastName, email, password];
  try {
    await connection.execute(sql, params);        
  } catch (err) {
    console.error(err);
  }
};

module.exports = insertUser;
