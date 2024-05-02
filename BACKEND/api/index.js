const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors())
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    await client.connect();
  const db = client.db("webathonDB");
  const usersCollection = db.collection("users");
  const articlesCollection = db.collection("articles");
  
  app.set("usersCollection", usersCollection);
  app.set("articlesCollection", articlesCollection);
  console.log("DB conncetion established");
}
catch(err){
  console.log(err);

}
}
run().catch(console.dir);

const userApp = require("./APIs/user-api.js");

app.use("/user-api", userApp);

app.use((err, req,res, next)=>{
        res.send({message:"errrrr "+err.message})
})


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;