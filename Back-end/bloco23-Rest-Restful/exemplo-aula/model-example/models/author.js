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
    return result.map(serialize).map(newAuthor);
  } catch(err) {
    console.log(err);
  }
};

module.exports = {
  getAll,
};
