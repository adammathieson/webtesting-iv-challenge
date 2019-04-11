const express = require('express');

const dogsRouter = require('../dogs/dogs-router')

const server = express();

server.use(express.json());

server.use('/api/dogs', dogsRouter);

server.get('/', (req, res) => {
    res.send('server is working');
})

module.exports = server;