const db = require('../database/dbConfig')
const Dogs = require('./dogs-model');

describe('dogs-model', () => {
    // afterEach(async () => {
    //     await db('dogs').truncate();
    // })

    describe('getAll', () => {
        it('returns full list of dogs', async () => {
            const dogs = await Dogs.getAll();
            expect(dogs.length).toEqual(4)
        })
    })
})