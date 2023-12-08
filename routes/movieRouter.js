const express =  require("express");

const {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
} =  require("../controllers/movieController.js");
const getMovie = require("../middleware/movie.js");
const admin = require("../middleware/admin.js");
const router = express.Router();
router.get('/movies',getMovies);
router.get('/movies/:id',getMovie,getMovieById);
router.post('/movies',admin,createMovie);
router.patch('/movies/:id',admin,getMovie,updateMovie);
router.delete('/movies/:id',admin,getMovie,deleteMovie);

module.exports = router;