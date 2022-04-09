const express = require("express");
const errorMiddleware=require('./middleware/error');
const cookieParser = require("cookie-parser"); 
const app=express();

app.use(express.json());
app.use(cookieParser());

// Route imports
const userRoute=require("./routes/userRoutes");

app.use('/api/v1',userRoute);

// Midddleware for error
app.use(errorMiddleware);

module.exports=app;