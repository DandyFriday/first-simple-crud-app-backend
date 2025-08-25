const express = require('express');
const { addFavorite } = require('../controllers/FavoriteController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, addFavorite);

module.exports = router;