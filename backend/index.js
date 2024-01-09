const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

/*
Create folder using fs 
const fs = require('fs')

console.log(fs.existsSync("public"))
fs.mkdirSync("public/videos");

*/

const app = express();

app.use(cors());

const mediaRoute = require('./routes/mediaRoute');

app.use("/api/v1/media",mediaRoute);
app.use("/public",express.static(path.join(__dirname,"public")));

const mongoURI = "mongodb://127.0.0.1:27017/uploadproject";

mongoose.connect(mongoURI,{
    useNewUrlParser: true,
})

mongoose.connection.on('connected', ()=>{
    console.log("Connected to mongodb...");
})

mongoose.connection.on('error', (err)=>{
    console.log("Error while connecting to db",err);
})

app.listen(4000, ()=>{
    console.log("App is running on PORT 4000");
})