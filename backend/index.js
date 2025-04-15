import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import cors from 'cors'
import authRouter from './routes/authRoutes.js'
import connectToDatabase from './db.js';

const app = express()
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}))
app.use(express.json())
app.use('/auth', authRouter) 
app.get('/', (req, res) => {
    console.log("req.body")
})

// Test MySQL connection using connectToDatabase
connectToDatabase()
  .then(() => {
    console.log('Connected to MySQL database');
  })
  .catch((err) => {
    console.error('MySQL connection failed:', err);
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
