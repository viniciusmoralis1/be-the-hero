const express = require('express');
const ongC = require('./controllers/OngControllers');
const incC = require('./controllers/IncidentController');
const proC = require('./controllers/ProfileController');
const sesC = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', ongC.index);
routes.post('/ongs', ongC.create);

routes.post('/session', sesC.create);

routes.get('/profile', proC.index);

routes.get('/incidents', incC.index);
routes.post('/incidents', incC.create);
routes.delete('/incidents/:id', incC.delete);

module.exports = routes;