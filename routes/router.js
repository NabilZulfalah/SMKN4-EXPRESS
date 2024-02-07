//Mengimpor Modul Express:
const express = require ('express');
const router = express.Router();

const {getAll, create} = require('../controllers/controller.js')


router.get('/', (req, res) => {
    res.send('Halo Dunia!');
});

router.get('/getAll', getAll);
router.post('/create', create);

module.exports = router;