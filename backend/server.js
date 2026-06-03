import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {connectDb} from './config/db.js';

dotenv.config();

const app=express();
const PORT= process.env.PORT||5000;

connectDb();

app.use(cors());
app.use(express.json());

app.get('/api/test',(req,res)=>{
    res.json({
        message:'hello from the backend server!'
    });

});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});