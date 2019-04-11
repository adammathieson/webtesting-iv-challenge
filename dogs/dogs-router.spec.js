const request = require('supertest');
const router = require('./dogs-router');

describe('dogs-router.js', () => {
    describe('GET /', () => {
        it('should respond 200 OK', () => {
          request(router)
            .get('/')
            .then(res => {
                expect(res.status).toBe(201)
            })
        })
    })
})