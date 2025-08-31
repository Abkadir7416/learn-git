import express  from "express";
import dotenv from 'dotenv';
import {connectDB} from './DB/db.config.js';


// Load environment variables
dotenv.config();

const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();

// Sample route - Root
app.get("/", (req, res) => {
  res.send("Hello from Node.js Server 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
