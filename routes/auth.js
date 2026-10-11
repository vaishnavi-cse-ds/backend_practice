const express = require('express');
const router = express.Router();
const { register } = require('../controllers/usercontroller');
const { login } = require('../controllers/usercontroller');

router.post('/login',login);
router.post('/register',register);

module.exports = router;