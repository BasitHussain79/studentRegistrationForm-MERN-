require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const connectDB = require("./config/db");
const studentRoutes = require("./routes/student");

// Connect to DB
connectDB();

const PORT = process.env.PORT || 8080;

// middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);

app.use("/", (req, res) => {
  return res.json({
    message: "Welcome to studentRegistrationSystem",
  });
});

const server = app.listen(PORT, () => {
  console.log("Listening", PORT);
});

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error ${error}`);
  server.close(() => process.exit(1));
});
