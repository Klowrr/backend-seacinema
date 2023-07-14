import express from "express";
import {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
} from "../controllers/Movies.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();
router.get('/movies',getMovies);
router.get('/movies/:id',getMovieById);
router.post('/movies',verifyUser,adminOnly,createMovie);
router.patch('/movies/:id',verifyUser,adminOnly ,updateMovie);
router.delete('/movies/:id',verifyUser,adminOnly ,deleteMovie);

export default router;