const express = require('express');
const { 
  getTransactions, 
  getTransactionById, 
  getTransactionByUserId,
  createTransactionTicket,
  createTransactionTopUp,
  createTransactionWithdraw, 
  deleteTransaction 
} = require('../controllers/transactionController.js');
const router = express.Router();
const auth = require('../middleware/auth.js');
router.get('/all-transactions',auth,getTransactions)
router.get('/transactions-detail/:id',auth,getTransactionById)
router.get('/transactions',auth,getTransactionByUserId)
router.post('/transactions',auth,createTransactionTicket)
router.post('/transactions/topup',auth,createTransactionTopUp)
router.post('/transactions/withdraw',auth,createTransactionWithdraw)
router.delete('/transactions/:id',auth,deleteTransaction)
module.exports = router;