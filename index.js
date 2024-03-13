const express = require("express");
const urlRoute = require("./Routes/url");
const mongoose=require("mongoose");

const app = express();
const PORT = 8000;

app.use(express.json()); 

app.use("/url", urlRoute); 
  mongoose.connect("mongodb+srv://Qwerty:upasana@cluster0.yok6urw.mongodb.net/", {
    dbName: "short_URL"
  }).then(() => {
    console.log('Mongo Atlas connected');
  }).catch(err => {
    console.error('Mongo Atlas connection error:', err);
  });
  

app.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`));
