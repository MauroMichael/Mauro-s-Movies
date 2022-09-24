var express = require('express');
var router = express.Router();
const moviesController = require('../controllers/movies')

router.get('/', moviesController.getFavorites)
router.post('/:id/:title', moviesController.createFavorite)
router.delete('/:deleteId', moviesController.deleteFavorite)
router.get('/getmovies', moviesController.getMovies)
router.get('/getseries', moviesController.getSeries)
router.get('/detail/:id', moviesController.getDetail)

module.exports = router;