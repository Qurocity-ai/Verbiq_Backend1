const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

// Load env variables
dotenv.config();

const reviewRoute = require("./rotes/reviewRoutes");
const registrationRoute = require("./rotes/registrationRoutes");
const loginRoute = require("./rotes/loginRoutes");
const otpRoute = require("./rotes/otpRoutes");
const dashboardRoute = require("./rotes/dashboardRoute");
const logoutRoute = require("./rotes/logoutRoutes");
const jobsRoute = require("./rotes/jobsRoute");
const jobApplicationRoute = require("./rotes/jobApplicationRoute");
const filterRoute = require("./rotes/filterRoute");
const callbackRoute = require("./rotes/callbackRoute");
const newsletterRoute = require("./rotes/newsletterRoutes");
// Connect to database
connectDB();

// Init express app
const app = express();

// Middleware to parse JSON
app.use(express.json());
// const corsOptions = {
//   origin: [
//     "http://localhost:5174", // Your frontend URL
//     "https://verbiq.ai", // Add production URL when ready
//   ],
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true,
//   optionsSuccessStatus: 200, // For legacy browser support
// };
app.use(cors());

app.use("/reviews", reviewRoute);
app.use("/registration", registrationRoute);
app.use("/login", loginRoute);
app.use("/reset", otpRoute);
app.use("/candidate", registrationRoute);
// app.use('/company',registrationRoute);
app.use("/dashboard", dashboardRoute);
app.use("/logout", logoutRoute);
app.use("/jobs", jobsRoute);
app.use("/applications", jobApplicationRoute);
app.use("/filter", filterRoute);
app.use("/query", callbackRoute);
app.use("/newsletter", newsletterRoute);

// Basic route
app.get("/", (req, res) => {
  res.send("Server and DB are running ✅");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
