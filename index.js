const express = require("express");
const { connectToMongoAtlas } = require("./connection");
const urlRoute = require("./Routes/url");

const app = express();
const PORT = 8000;


connectToMongoAtlas("mongodb+srv://Qwerty:<Qwerty@123>@cluster0.yok6urw.mongodb.net/YourDatabaseName?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('Mongo Atlas connected'))
  .catch(err => console.error({err:'Mongo Atlas connection error:'}));


app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`));
