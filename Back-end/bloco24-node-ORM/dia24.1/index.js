require('dotenv').config();

const express = require('express');
const bookRouter = require('./src/controller/bookController');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/', bookRouter);

app.listen(PORT, () => console.log(`Running at port ${PORT}`));
