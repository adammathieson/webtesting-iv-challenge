const express = require('express');

const dogsRouter = require('../dogs/dogs-router')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('server is working');
})

module.export = server;