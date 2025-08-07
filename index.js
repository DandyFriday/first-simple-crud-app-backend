const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/ProductModel.js');
const ProductRoute = require('./routes/ProductRoute.js');
const app = express()

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/api/products', ProductRoute)


app.get('/', (req, res) => {
    res.send('Hello from Node API practice Server');
});

//connection to mongodb    9JuF5CtSGKqefhYOe  dandyfriday31
mongoose.connect("mongodb+srv://dandyfriday31:014EyDK4b2cNoeoy@cluster0.duurb6u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log('Connected to database!');
    app.listen(3000, () => {
    console.log('Server running on port 3000');

});
}).catch(() => {
     console.log("Connection failed");
});
