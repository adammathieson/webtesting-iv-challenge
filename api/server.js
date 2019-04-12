const express = require('express');

const Dogs = require('../dogs/dogs-model');


const server = express();

server.use(express.json());


// server.get('/', (req, res) => {
//     res.send('server is working');
// })

server.get('/dogs', (req, res) => {
    Dogs
        .getAll()
        .then(dogs => {
            res.status(200).json(dogs)
        })
        .catch(err => {
            res.status(500).json(err)
        });
});

server.post('/dogs', (req, res) => {
    let dog = req.body;

    Dogs
        .insert(dog)
        .then(dog => {
            res.status(200).json(dog);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})
server.delete('/dogs/:id', (req, res) => {
    const { id } = req.body;

    Dogs
        .remove(id)
        .then(dog => {
            res.status(202).json({ message: `dog ${id} has been removed` })
        })
        .catch(err => {
            res.status(500).json(err)
        })

})

module.exports = server;