const connection = require('./connection');

const newAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name).join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  }
}

const serialize = (author) => ({
  id: author.id,
  firstName: author.first_name,
  middleName: author.middle_name,
  lastName: author.last_name,
});

const getAll = async () => {
  try {
    const [result] = await connection
      .execute('SELECT id, first_name, middle_name, last_name FROM authors');
    if (result.length === 0) return null;
    return result.map(serialize).map(newAuthor);
  } catch(err) {
    console.log(err);
  }
};

const getById = async (id) => {
  try {
    const [author] = await connection
      .execute('SELECT * FROM authors WHERE id = ?', [id]);
    if (author.length === 0) return null;
    return author.map(serialize).map(newAuthor);  
  } catch (err) {
    console.log(err);
  }
}

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;
  return true;
};

const createAuthor = async (
    firstName,
    middleName,
    lastName
    ) => await connection
      .execute(
        `INSERT INTO authors (first_name, middle_name, last_name)
        VALUES(?, ?, ?)`, [firstName, middleName, lastName]
      );

module.exports = {
  getAll,
  getById,
  isValid,
  createAuthor
};
