const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({
    evento: "Semana Omnistack 11",
    acao: "iniciando o back-end"
  });
});

app.listen('3333');
