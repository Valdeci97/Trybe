const express = require('express');
const app = express();
const Author = require('./models/author');
const Books = require('./models/book');

const PORT = 3000;

app.use(express.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  if (!authors) return res.status(404).send({ message: "Not Found" });
  return res.status(200).send({ authors })
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.getById(id);
  if (!author) return res.status(404).send({ message: "Not Found!" });
  return res.status(200).send({ author });
});

app.get('/books', async (_req, res) => {
  const books = await Books.getAll();
  if (!books) return res.status(404).send({ message: "Not Found" });
  return res.status(200).send({ books });
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.getById(id);
  if (!book) return res.status(404).send({ message: "Not Found" });
  return res.status(200).send({ book });
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).send({ message: 'Invalid data!' });
  }
  await Author.createAuthor(first_name, middle_name, last_name);
  return res.status(201).send({ message: 'Autor criado com sucesso.' });
});

app.listen(PORT, () => console.log(`Running at ${PORT}`));
