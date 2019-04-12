const db = require('../database/dbConfig');

module.exports = {
    insert,
    update,
    remove,
    getAll,
    getById
};

async function insert(dog) {
    const [id] = await db('dogs').insert(dog);
    return db('dogs')
        .where({ id })
        .first()
}

async function update(id, dog) {
    return null;
}

function remove(id) {
    return null;
}

function getAll() {
    return db('dogs');
}

function getById(id) {
    return null;
}