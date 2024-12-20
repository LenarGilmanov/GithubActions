const request = require('supertest');
const app = require('../app');
it('responds with Hello, World!', async () => {
  const response = await request(app).get('/'); 
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('Hello,Node World!\n');
});
