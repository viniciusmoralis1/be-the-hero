const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({
    evento: "Semana Omnistack 11",
    acao: "iniciando o back-end"
  });
});

module.exports = routes;