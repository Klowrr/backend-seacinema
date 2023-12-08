const express =  require("express");

const {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
} =  require("../controllers/movieController.js");
const getMovie = require("../middleware/movie.js");

const router = express.Router();
router.get('/movies',getMovies);
router.post('/movies',createMovie);
router.get('/movies/:id',getMovie,getMovieById);
router.patch('/movies/:id',getMovie,updateMovie);
router.delete('/movies/:id',getMovie,deleteMovie);

module.exports = router;