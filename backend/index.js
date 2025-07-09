const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// 🔐 Store users in memory
let users = [];

// ✅ Registration Route
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(400).json({ success: false, message: "User already exists" });
  }

  const newUser = { name, email, password, isPaidUser: false };
  users.push(newUser);
  console.log("👤 New user registered:", newUser);
  res.status(201).json({ success: true, user: newUser });
});

// ✅ Login Route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    res.status(200).json({ success: true, user });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// ✅ Fake Payment Route
app.post("/pay", (req, res) => {
  const { email } = req.body;
  const user = users.find((u) => u.email === email);

  if (user) {
    user.isPaidUser = true;
    console.log(`✅ ${email} marked as paid`);
    res.status(200).json({ success: true });
  } else {
    res.status(404).json({ success: false, message: "User not found" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
