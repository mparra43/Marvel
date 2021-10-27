/* rutas del personajes marvel */
const {Router} = require('express');
const {check} = require('express-validator');
const {validateJwt} = require('../middlewares/validateJwt');
const {validateInput} = require('../middlewares/validateInput');
const {charactersAll, addFavorite, allFavorites,} = require('../controllers/marvel');
const router = Router();

router.get('/all', validateJwt, charactersAll);
router.get('/allFavorites', validateJwt, allFavorites);
router.post('/addFavorite',
    [
        check('uid', 'El id del usuario es obligatorio').not().isEmpty(),
        check('cid', 'El id del personaje es obligatorio').not().isEmpty(),
        check('title', 'El nombre es obligatorio').not().isEmpty(),
        check('image', 'La imagen es  obligatoria').not().isEmpty(),
        validateInput, validateJwt
    ],
    addFavorite);


module.exports = router;