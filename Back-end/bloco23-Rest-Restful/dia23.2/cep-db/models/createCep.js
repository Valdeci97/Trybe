const connection = require('./connection');

const create = async (cep, logradouro, bairro, localidade, uf) => {
  await connection.execute(`INSERT INTO ceps(cep, logradouro, bairro, localidade, uf)
    VALUES (?, ?, ?, ?, ?)`, [cep, logradouro, bairro, localidade, uf]);
};

module.exports = create;
