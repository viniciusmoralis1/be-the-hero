const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Incidents', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  })

  it('should be able to create a new incident', async () => {
    const idTeste = '1138ed1f';
    const response = await request(app)
      .post('/incidents')
      .set('Authorization', idTeste)
      .send({
        title: "Caso",
	      description: "Detalhes",
	      value: 120
      })

      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toBe(1);
  });
});