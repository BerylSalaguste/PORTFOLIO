import express from "express";
import dotenv from 'dotenv';
import { connectDB } from "./src/db/db.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:`+ PORT );
});