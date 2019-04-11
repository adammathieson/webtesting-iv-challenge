const router = require('express').Router();

const Dogs = require('../dogs/dogs-model');

router.get('/', (req, res) => {
    Dogs
        .find()
        .then(dogs => {
            res.status(200).json(dogs)
        })
        .catch(err => {
            res.status(500).json(err)
        });
});

module.exports = router;