import express from 'express'
import {
  getShowTimesById,
  createShowTimes,
  updateShowTimes,
  getShowTimes,
  getShowTimesByIdMovie,
  updateSeats
} from '../controllers/ShowTimes.js'

import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/showtimes',getShowTimes)
router.get('/showtimes/:id',getShowTimesByIdMovie)
router.get('/showtimes/:id/:shid',getShowTimesById)
router.patch('/showtimes/:id/:shid',updateSeats)
router.post('/showtimes',createShowTimes)
// router.patch('/showtimes/:id',updateShowTimes)x

export default router