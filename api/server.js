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
    let { name } = req.body;
    if(!name) {
        res.status(422).json({ message: 'Please include name' })
    }

    Dogs
        .insert({ name })
        .then(dog => {
            res.status(201).json(dog);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})


module.exports = server;