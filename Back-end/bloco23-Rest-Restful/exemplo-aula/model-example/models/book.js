const connection = require('./connection');

const getById = async (id) => {
  try {
    const [result] = await connection
      .execute('SELECT id, title, author_id FROM books WHERE id = ?;', [id]);
    return result;
  } catch (err) {
    console.error(err);
  }
};

const getAll = async () => {
  try {
    const [result] = await connection
      .execute('SELECT id, title, author_id FROM books;')
    return result;
  } catch (err) {
    console.error(err)
  }
};

module.exports = {
  getAll,
  getById
};
