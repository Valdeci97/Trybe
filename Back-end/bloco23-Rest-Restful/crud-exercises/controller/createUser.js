const express = require('express');
const nameValidator = require('../middlewares/nameValidator');
const passwordValidator = require('../middlewares/passwordValidator');
const emailValidator = require('../middlewares/emailValidator');
const insertUser = require('../models/insertUser');

const router = express.Router();

router.post('/',
  nameValidator,
  passwordValidator,
  emailValidator,
  async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    await insertUser(firstName, lastName, email, password);
    return res.status(200).send({ firstName, lastName, email });
});

module.exports = router;
