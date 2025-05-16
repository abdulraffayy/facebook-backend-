import dotenv from 'dotenv';
dotenv.config(); // MUST come before accessing env vars

import express from 'express';
import connectDB from './connectdb/db';

console.log('MONGO_URI:', process.env.MONGO_URI); 

const app = express();
const port = process.env.PORT || 7000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Facebook Backend API' });
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
