const express = require('express');
const bodyParser = require('body-parser');
const {
  userNameValidator,
  emailValidator,
  passwordValidator,
} = require('./helpers/userValidator');
const btcToken = require('./helpers/btcToken');

const app = express();

app.use(bodyParser.json());

app.post('/user/register',
  userNameValidator,
  emailValidator,
  passwordValidator,
  (_req, res) => res.status(201).json({ message: "user created" })
);

app.post('/user/login', emailValidator, passwordValidator, (_req, res) => {
  res.status(200).json({ token: "8549fg9tt5ko"});
});

app.get('/btc/price', btcToken)

app.listen(3000, () => console.log('Ouvindo na porta 3000.'));
