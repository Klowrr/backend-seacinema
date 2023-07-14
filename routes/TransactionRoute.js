import express from 'express'
import { 
  createTransaction,
  getTransaction,
  getTransactionByUserId,
  createTransactionTopUp,
  updateTransaction
 } from '../controllers/Transaction.js'

import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/transaction',getTransaction)
router.get('/transaction/:id',verifyUser,getTransactionByUserId)
router.post('/transaction/:id',verifyUser,createTransactionTopUp)
router.post('/transaction/:id/:shid',verifyUser,createTransaction)
router.patch('/transaction/:id',updateTransaction)

export default router