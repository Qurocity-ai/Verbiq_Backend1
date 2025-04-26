const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require("cors");



// Load env variables
dotenv.config();

const reviewRoute = require("./rotes/reviewRoutes");
const registrationRoute = require("./rotes/registrationRoutes");
const loginRoute=require('./rotes/loginRoutes');
const otpRoute=require('./rotes/otpRoutes');


// Connect to database
connectDB();

// Init express app
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

app.use("/reviews",reviewRoute);
app.use("/registration",registrationRoute);
app.use("/login",loginRoute);
app.use("/reset",otpRoute);

// Basic route
app.get('/', (req, res) => {
  res.send('Server and DB are running ✅');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
