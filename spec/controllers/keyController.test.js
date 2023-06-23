const app = require("../../app");
const request = require("supertest");
const Key = require('../../models/keyModel');


describe('/set', () => {
  describe('POST, when a key-value is provided', () => {
    test('the response code is 201', async () => {
      let response = await request(app)
        .post('/set')
        .send({pizza: 'delicious'})
      expect(response.statusCode).toBe(201);
    })
  })
});
