const express = require('express');
const app = express();
const Author = require('./models/author');
const PORT = 3000;

app.get('/', async (req, res) => {
  const author = await Author.getAll();
  res.status(200).send({ author })
});

app.listen(PORT, () => console.log(`Running at ${PORT}`));
