require('dotenv').config();
const express = require('express');
const cep = require('./controller/cep');
const cepPost = require('./controller/cepPost');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
  return res.status(200).send({ message: 'pong' });
});

app.use('/cep', cep);
app.use('/cep', cepPost);

app.listen(PORT, () => console.log(`Running at port ${PORT}`));
