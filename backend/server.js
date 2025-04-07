import express from "express";
import dotenv from 'dotenv';
import { connectDB } from "./src/db/db.js";
import projectRoutes from './routes/projectRoutes.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('DB connection error:', err));

app.use('/api', projectRoutes);

app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:`+ PORT );
});