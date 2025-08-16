const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/ProductModel.js');
const dotenv = require('dotenv');
const ProductRoute = require('./routes/ProductRoute.js');

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 3000; 

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/products', ProductRoute);

// Health check route
app.get('/', (req, res) => {
    res.json({
        status: true,
        message: 'Health check pass'
    });
});

// Connection to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to database!');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('Connection failed:', err);
  });

