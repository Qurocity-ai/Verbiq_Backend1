const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');

// Load env variables
dotenv.config();

// Connect to database
connectDB();

// Init express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Server and DB are running ✅');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
