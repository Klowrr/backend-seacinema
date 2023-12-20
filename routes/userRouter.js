const express = require('express');
const { login, register, me } = require('../controllers/auth.Controller.js');
const auth = require('../middleware/auth.js');
const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/me', auth, me);
module.exports = router;