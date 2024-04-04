// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create Express app
const app = express();

// Set up middleware to parse JSON requests
app.use(bodyParser.json());

// MongoDB connection string
const uri = 'mongodb+srv://mrahman3968:mongodbmyself@cluster0.cwzlnxz.mongodb.net/storeDB?retryWrites=true&w=majority';

// Connect to MongoDB database
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Define routes
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const commentsRoutes = require('./routes/commentsRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/comments', commentsRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
