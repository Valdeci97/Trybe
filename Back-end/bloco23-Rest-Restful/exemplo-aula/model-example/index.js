const express = require('express');
const app = express();
const Author = require('./models/author');
const Books = require('./models/book');

const PORT = 3000;

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).send({ authors })
});

app.get('/books', async (_req, res) => {
  const books = await Books.getAll();
  res.status(200).send({ books });
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.getById(id);
  res.status(200).send({ book });
});

app.listen(PORT, () => console.log(`Running at ${PORT}`));
