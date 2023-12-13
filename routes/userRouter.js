const express = require('express');
const { login, register, me } = require('../controllers/auth.controller.js');
const auth = require('../middleware/auth.js');
const { getTicketByUserId, refundTicket } = require('../controllers/ticketController.js');
const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/me', auth, me);
router.get('/tickets', auth, getTicketByUserId);
router.patch('/refund-ticket', auth, refundTicket);
module.exports = router;