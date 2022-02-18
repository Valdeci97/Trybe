const express = require('express');
const creatUser = require('./controller/createUser');

const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/user', creatUser);

app.listen(PORT, () => console.log(`Ativo na porta ${PORT}`));
