const express = require("express");
const urlRoute = require("./Routes/url");
const mongoose=require("mongoose");
require('dotenv').config();


const app = express();
const PORT = 8000;

app.use(express.json()); 

app.use("/url", urlRoute); 
mongoose.connect(process.env.MONGO_URL, {    
  dbName: "short_URL"
  }).then(() => {
    console.log('Mongo Atlas connected');
  }).catch(err => {
    console.error('Mongo Atlas connection error:', err);
  });
  

app.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`));
