const express = require('express');
const cepHandler = require('../middlewares/cepHandler');
const formater = require('../helpers/cepFormater');
const { getCep } = require('../controller/findCep');

const router = express.Router();

router.get('/:cep', cepHandler, async (req, res) => {
  const { cep } = req.params;
  const newCep = formater(cep);
  const result = await getCep(newCep);
  if (result.length === 0) {
    return res.status(404).send({
      error: {
        code: 'Not found',
        message: 'Cep não encontrado'
      }
    });
  }
  return res.status(200).send(...result);
});

module.exports = router;
