const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;