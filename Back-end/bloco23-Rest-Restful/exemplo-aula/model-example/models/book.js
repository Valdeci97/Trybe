const connection = require('./connection');
const Author = require('./author');

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

const isValid = async (title, authorId) => {
  if(!title || typeof authorId !== 'string' || title.length < 3) return false;
  if(!authorId || typeof authorId !== 'string' || !(await Author.getById(authorId))) return false;
  return true;
};

const createBook = async (title, authorId) => await connection.execute(
  'INSERT INTO books (title, author_id) VALUES (?, ?)', [title, authorId]
);

module.exports = {
  getAll,
  getById,
  isValid,
  createBook,
};
