import express  from "express";
import dotenv from 'dotenv';
import {connectDB} from './DB/db.config.js';
import userRoutes from './routes/user.js'
import blogRoutes from './routes/blog.js'


// Load environment variables
dotenv.config();

const app = express();
const PORT = 5000;

//middlewares
app.use(express.json())

// Connect to MongoDB
connectDB();

// Sample route - Root
app.get("/", (req, res) => {
  res.send("Hello from Node.js Server 🚀");
});

// Routes
app.use('/', userRoutes);
app.use('/', blogRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
