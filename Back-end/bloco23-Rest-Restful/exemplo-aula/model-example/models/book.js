const connection = require('./connection');

const serialize = (book) => ({
  id: book.id,
  title: book.title,
  authorId: book.author_id,
});

const getById = async (id) => {
  try {
    const [result] = await connection
      .execute('SELECT * FROM books WHERE id = ?;', [id]);
    if (result.length === 0) return null;
    return result.map(serialize);
  } catch (err) {
    console.error(err);
  }
};

const getAll = async () => {
  try {
    const [result] = await connection
      .execute('SELECT * FROM books;');
    if (result.length === 0) return null;
    return result.map(serialize);
  } catch (err) {
    console.error(err)
  }
};

module.exports = {
  getAll,
  getById
};
