const router = require('express').Router();

const Dogs = require('./dogs-model');

router.get('/', (req, res) => {
    Dogs
        .getAll()
        .then(dogs => {
            res.status(200).json(dogs)
        })
        .catch(err => {
            res.status(500).json(err)
        });
});

router.post('/', (req, res) => {
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

router.delete('/:id', (req, res) => {
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

module.exports = router;