const express = require('express');
const auth = require('../middleware/auth.js');
const admin = require("../middleware/admin.js");
const { getTicketByUserId, refundTicket, cekInTicket } = require('../controllers/ticketController.js');
const router = express.Router();

router.get('/tickets', auth, getTicketByUserId);
router.patch('/refund-ticket', auth, refundTicket);
router.patch('/cekin-ticket',admin,cekInTicket);
module.exports = router;