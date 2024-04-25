const express = require("express");
const app = express();
const mongoClient = require("mongodb").MongoClient;
const path = require('path');
const cors = require('cors');
app.use(cors({
  origin: process.env.FRONTEND_URL
}))
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../FRONTEND/build')));

mongoClient.connect(process.env.MONGO_URI).then((client) => {
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

app.use((err, req,res, next)=>{
        res.send({message:err.message})
})


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
