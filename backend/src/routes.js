const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const ongC = require('./controllers/OngControllers');
const incC = require('./controllers/IncidentController');
const proC = require('./controllers/ProfileController');
const sesC = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', ongC.index);

routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
}), ongC.create);

routes.post('/session', sesC.create);

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown()
}), proC.index);

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}), incC.index);

routes.post('/incidents', incC.create);

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object({
    id: Joi.number().required()
  })
}), incC.delete);

module.exports = routes;