const express = require('express');
const { 
  getAllShowTimes, 
  getShowTimeById, 
  getShowTimeByMovieId,
  createShowTime, 
  updateShowTime, 
  deleteShowTime 
} = require('../controllers/showtimeController.js');

const router = express.Router();
router.get('/showtimes', getAllShowTimes);
router.get('/showtimes-detail/:id', getShowTimeById);
router.get('/showtimes/:id',getShowTimeByMovieId);
router.post('/showtimes', createShowTime);
router.patch('/showtimes/:id', updateShowTime);
router.delete('/showtimes/:id', deleteShowTime);
module.exports = router;