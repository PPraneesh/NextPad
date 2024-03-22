const express = require('express')
const userApp = express.Router()
const {createUser,userLogin} = require('./Util.js')
const expressAsyncHandler = require('express-async-handler')


//login and register
userApp.post('/register',expressAsyncHandler(createUser)) 
userApp.post('/login',expressAsyncHandler(userLogin)) 

userApp.use((req,res,next)=>{
    usersCollection=req.app.get('usersCollection')
    articlesCollection=req.app.get('articlesCollection')
    next()
})



// to get articles
userApp.get('/home',expressAsyncHandler(async(req,res)=>{
    const articles = await articlesCollection.find({visibility:true}).toArray()
    res.send({message:"articles",payload:articles})
}))
//

//to get each article
userApp.get('/home/:arId',expressAsyncHandler(async(req,res)=>{
    let id = req.params.arId
    let article = await articlesCollection.findOne({articleId:id})
    res.send({message:"article",payload:article})
}))





//to add comments
userApp.post('/comment/:articleId', expressAsyncHandler(async (req, res) => {
    const id = Number(req.params.articleId);
    const comment = req.body;
    await articlesCollection.updateOne({ articleid: id }, { $push: { comments: comment } });
    res.send({ message: "comment added" });
}));


//creating new articles
userApp.post('/new-article', expressAsyncHandler(async (req, res) => {
    const article = req.body;
    await usersCollection.updateOne({ username: article.username }, { $push: { articles: article.articleId } }).then(() => {
        console.log('article added to user');
    })
    .catch((err) => {
        console.log(err);
    });
    await articlesCollection.insertOne(article);
    res.send({ message: 'Article created' });
}));

//updating articles
userApp.put("/modify-article",expressAsyncHandler(async(req,res)=>{
    const modifiedArticle = req.body;
    await articlesCollection.updateOne({articleId:modifiedArticle.articleId},
        {$set: {...modifiedArticle}});
    res.send({message: 'Article modified'})
}))

//soft delete
userApp.put("/delete-article/:articleId",expressAsyncHandler(async(req,res)=>{
let article = req.body;
await articlesCollection.updateOne({articled:article.articleId},
    {$set: {...article}});
res.send({message: 'Article deleted'})
}))
//exports
module.exports = userApp