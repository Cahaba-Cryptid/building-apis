const express = require('express');
const ChirpStore = require('../chirpstore')

let router = express.Router();



router.get('/:id?', (req, res) => {
    let id = req.params.id
    if (id) {
        let chirp = ChirpStore.GetChirp(id);
        res.send(chirp);
    } else {
        let chirps = (ChirpStore.GetChirps());
        res.send(chirps)
    }
});

router.post('/', (req, res) => {
    let newChirp = {
        user: req.body.user,
        chirp: req.body.chirp
    };
    ChirpStore.CreateChirp(req.body)
    res.send('New chirp added!')
});

router.delete('/:id', (req, res) => {
    ChirpStore.DeleteChirp(req.params.id);
    res.send(`The deed is done.... Chirp ${req.params.id} has been terminated....`);
});

router.put('/:id', (req, res) => {
    ChirpStore.UpdateChirp(req.params.id, req.body)
    res.send(`Chirp ${req.params.id} edited.`)
})

module.exports = router;