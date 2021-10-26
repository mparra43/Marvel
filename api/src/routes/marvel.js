/* rutas del personajes marvel */
const {Router} = require('express');
const {check} = require('express-validator');
const {validateJwt} = require('../middlewares/validateJwt');
const {validateInput} = require('../middlewares/validateInput');
const {charactersAll, addFavorite, allFavorites, } = require('../controllers/marvel');
const router = Router();

router.get('/all', validateJwt, charactersAll);
router.get('/all/favorites', validateJwt, allFavorites);
router.post('/addFavorite',
    [
        check('uid', 'El id del usuario es obligatorio').not().isEmpty(),
        check('cid', 'El id del personaje es obligatorio').not().isEmpty(),
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('description', 'la descripción es obligatoria ').not().isEmpty(),
        check('image', 'La imagen es  obligatoria').not().isEmpty(),
        check('comics', 'los comics son es obligatorios').not().isEmpty(),
        validateInput, validateJwt
    ],
    addFavorite);


module.exports = router;