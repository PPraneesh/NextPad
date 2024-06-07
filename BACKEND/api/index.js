const express = require("express");
const app = express();
const mongoClient = require("mongodb").MongoClient;
const path = require('path');
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors())

mongoClient.connect(process.env.MONGODB_URI,{
  connectTimeoutMS: 60000, 
  socketTimeoutMS: 60000 ,
  keepAlive: true, 
})
  .then((client) => {
  const db = client.db("webathonDB");
  const usersCollection = db.collection("users");
  const articlesCollection = db.collection("articles");
  
  app.set("usersCollection", usersCollection);
  app.set("articlesCollection", articlesCollection);
  console.log("DB conncetion established");
})
.catch((err)=>{
    console.log('Error connecting DB ', err);
});


const userApp = require("./APIs/user-api.js");

app.use("/user-api", userApp);
app.get("/",(req,res)=>{
  res.send({message:"You found the backend of the webathon, you can always test it..."})
})
app.use((err, req,res, next)=>{
        res.send({message:"errrrr "+err.message})
})


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
