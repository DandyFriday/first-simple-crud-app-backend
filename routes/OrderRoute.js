const express = require('express');
const { placeOrder } = require('../controllers/OrderController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, placeOrder);

module.exports = router;