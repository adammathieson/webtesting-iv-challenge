const db = require('../database/dbConfig');

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById
};

async function insert(dog) {
    return null;
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

function findById(id) {
    return null;
}