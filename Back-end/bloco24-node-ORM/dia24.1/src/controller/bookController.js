const express = require('express');
const { Book } = require('../models');

const router = express.Router();

router.get('/books', async (_req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: `Something wrong happened: ${err.message}` });
  }
});

router.get('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(book);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: `Something wrong happened: ${err.message}` });
  }
});

router.post('/book', async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const book = await Book.create({ title, author, pageQuantity });
    if (!book) return res.status(404).json({ message: 'Book not found' });
    return res.status(201).json(book);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: `Something wrong happened: ${err.message}` });
  }
});

router.put('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity = 0 } = req.body;
    const book = await Book.update({ title, author, pageQuantity }, { where: { id } });
    if (!book) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(book);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: `Something wrong happened: ${err.message}` });
  }
});

router.delete('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    await book.destroy();
    return res.status(204).end();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: `Something wrong happened: ${err.message}` });
  }
});


module.exports = router;
