const express = require('express');
const ongC = require('./controllers/OngControllers');
const incC = require('./controllers/IncidentController');

const routes = express.Router();

routes.get('/ongs', ongC.index);
routes.post('/ongs', ongC.create);

routes.get('/incidents', incC.index);
routes.post('/incidents', incC.create);
routes.delete('/incidents/:id', incC.delete);

module.exports = routes;