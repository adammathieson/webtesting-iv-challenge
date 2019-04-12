const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
    describe('get /dogs', () => {
        it('should return status 200', async () => {
            const res = await request(server).get('/dogs')
            expect(res.status).toBe(200)
        })
    })

    describe('post /dogs', () => {
        it('should return status 201', async () => {
            const dog = { name: "Doc" };

            let res = await request(server)
                .post('/dogs')
                .send(dog);
            expect(res.status).toBe(201)
        })
    })
})