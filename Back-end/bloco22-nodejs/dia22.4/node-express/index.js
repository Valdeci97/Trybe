const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const rescue = require('express-rescue');
const helpers  = require('./helpers/fileReader');
const auth = require('./helpers/authMiddleware');

const app = express();

app.use(bodyParser.json());
app.use(auth)

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

app.post('/simpsons', rescue(async (req, res) => {
  const { id, name } = req.body;
  const content = await helpers.fileReader('./simpsons.json');
  const character = content.find((char) => char.id === id);
  if(!character) {
    content.push({ id, name });
    helpers.updateFile('./simpsons.json', content);
    res.status(204).end();
  }
  res.status(409).json({ "message": "id already exists" });
}));

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'missing fields' });
  }

  const token = crypto.randomBytes(8).toString('hex');

  res.status(200).json({ token });
})

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));
