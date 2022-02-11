const express = require('express');
const bodyParser = require('body-parser');

const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if (!price || Number(price) < 0) {
    return res.status(400).json({ message: 'invalid data!' });
  }

  next();
};

const app = express();

app.use(bodyParser.json());

app.post('/recipes', validatePrice, (req, res) => {
  const { name, price } = req.body;
  res.status(200).json({ name, price });
});

app.listen(3000, () => console.log('Ouvindo na porta 3000, manda bala!'));
