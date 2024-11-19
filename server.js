// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const jwt = require("jsonwebtoken");
const SECRET_KEY = "your-secret-key";

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // replace with your frontend URL if different
}));

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/your_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// User Schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// Route to handle sign-up
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
});

// Route to handle login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Password incorrect" });
    }
    const token = jwt.sign({ id: user._id, username: user.username }, SECRET_KEY, { expiresIn: "1h" });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
});

// Route to fetch leaderboard
app.get("/leaderboard", async (req, res) => {
  try {
    const users = await User.find().sort({ points: -1 }); // Sort players by score in descending order
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching leaderboard", error });
  }
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
