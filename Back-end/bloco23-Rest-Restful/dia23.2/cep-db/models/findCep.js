const connection = require('./connection');

const getCep = async (cep) => {
  try {
    const [result] = await connection.execute('SELECT * FROM ceps WHERE cep=?', [cep]);
    return result;
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getCep,
}
