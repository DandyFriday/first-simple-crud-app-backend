const User = require('../models/UserModel');

const addFavorite = async (req, res) => {
  try {
    const { productId } = req.body;

    if (!req.user.favorites.includes(productId)) {
      req.user.favorites.push(productId);
      await req.user.save();
    }

    res.status(200).json({ message: "Product added to favorites", favorites: req.user.favorites });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addFavorite };