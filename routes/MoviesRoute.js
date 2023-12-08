const express =  require("express");
const {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
} =  require("../controllers/Movies.js");

const router = express.Router();
router.get('/movies',getMovies);
router.get('/movies/:id',getMovieById);
router.post('/movies',createMovie);
router.patch('/movies/:id',updateMovie);
router.delete('/movies/:id',deleteMovie);

module.exports = router;