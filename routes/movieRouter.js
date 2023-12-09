const express =  require("express");

const {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
} =  require("../controllers/movieController.js");
const admin = require("../middleware/admin.js");
const router = express.Router();
router.get('/movies',getMovies);
router.get('/movies/:id',getMovieById);
router.post('/movies',admin,createMovie);
router.patch('/movies/:id',admin,updateMovie);
router.delete('/movies',admin,deleteMovie);

module.exports = router;