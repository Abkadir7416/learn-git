const express = require("express");

const app = express();
const PORT = 5000;


// Sample route - Root
app.get("/", (req, res) => {
  res.send("Hello from Node.js Server 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
