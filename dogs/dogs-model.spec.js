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

    // describe('insert', () => {
    //     it('adds a dog object to dogs array', async () => {
    //         let dog = await Dogs.insert({ name: "Rosie" });
    //         expect(dog.name).toBe('Rosie')
    //     })
    // })
})