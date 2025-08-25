const Order = require('../models/OrderModel');

const placeOrder = async (req, res) => {
  try {
    const { products } = req.body;

    const order = await Order.create({ user: req.user._id, products });
    res.status(201).json({ message: "Order placed", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { placeOrder };