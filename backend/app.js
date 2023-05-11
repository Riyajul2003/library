import express from 'express';
import { connnectDB } from './config/db.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import bookRoutes from './routes/bookRoutes.js';

// const express = require('express');
const app = express();
//middlewares
app.use(express.json())
app.use(cookieParser());
dotenv.config({path: "./config/config.env"})

connnectDB();

app.use("/user", userRoutes);
app.use("/book", bookRoutes);


app.listen(process.env.PORT, ()=>{
    console.log(`server is running at  http://localhost:${process.env.PORT}`);
})