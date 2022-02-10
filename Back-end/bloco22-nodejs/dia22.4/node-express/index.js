const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const helpers  = require('./helpers/fileReader');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.json({ "message": "pong" }));

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${name}` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (Number(age) <= 17) {
    res.status(401).json({ "message": "unauthorized" });
  }

  res.status(200).json({ "message": `Hello, ${name}` });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ "message": `Seu nome é ${name} e tem ${age} anos de idade` });
});

app.get('/simpsons', rescue(async (_req, res) => {
  try {
    const content = await helpers.fileReader('./simpsons.json');
    res.status(200).json(content);
  } catch(err) {
    res.status(500).json({ "message": "Internal server error" });
  }
}));

app.get('/simpsons/:id', rescue(async (req, res) => {
  const { id } = req.params;
  try {
    const content = await helpers.fileReader('./simpsons.json');
    const character = content.find((char) => char.id === id);
    if(!character) res.status(404).json({ "message": "simpson not found" });
    res.status(200).json(character);
  } catch(err) {
    res.status(500).json({ "message": "Internal server error" });
  }
}));

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));