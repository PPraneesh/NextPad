const express = require('express')
const userApp = express.Router()
const { createUser, userLogin } = require('./Util.js')
const expressAsyncHandler = require('express-async-handler')
const verifyToken = require('./verifyToken.js')

//login and register
userApp.post('/register',expressAsyncHandler(createUser)) 
userApp.post('/login',expressAsyncHandler(userLogin)) 

userApp.use((req,res,next)=>{
    usersCollection=req.app.get('usersCollection')
    articlesCollection=req.app.get('articlesCollection')
    next()
})



// to get articles
userApp.get('/home',verifyToken,expressAsyncHandler(async(req,res)=>{
    const articles = await articlesCollection.find({visibility:true}).toArray()
    .then((articles)=>{
        return res.send({message:"articles ",payload:articles})
    })
}))


//to get user articles
userApp.get('/user-profile/:username',verifyToken,expressAsyncHandler(async(req,res)=>{
    const username = req.params.username;
    let user = await usersCollection.findOne({username:username});
    let articleIds = user.articles;
    let articles = []
    await Promise.all(articleIds.map(async (id) => {
        const article = await articlesCollection.findOne({ articleId: id });
        articles.push(article);
    }));
    res.send({message:"user articles",payload:articles})}))

//to get each article
userApp.get('/home/:articleId',verifyToken,expressAsyncHandler(async(req,res)=>{
    let id = req.params.articleId
    const article = await articlesCollection.findOne({articleId:id})
    res.send({message:"article",payload:article})
}))


//to add comments
userApp.post('/comment/:articleId',verifyToken, expressAsyncHandler(async (req, res) => {
    const id = req.params.articleId;
    const comment = req.body;

    const result = await articlesCollection.updateOne(
        { articleId: id },
        { $push: { comments: { $each: [comment], $position: 0 } } }
    );
    res.send({ message: "comment added" });
}));
 

//creating new articles
userApp.post('/new-article', verifyToken, expressAsyncHandler(async (req, res) => {
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
userApp.put("/modify-article",verifyToken,expressAsyncHandler(async(req,res)=>{
    const modifiedArticle = req.body;
    delete modifiedArticle._id;
    await articlesCollection.updateOne({articleId:modifiedArticle.articleId},
        {$set: {...modifiedArticle}});
    res.send({message: 'Article modified'})
}))

//soft delete
userApp.put("/delete-article/:articleId",verifyToken,expressAsyncHandler(async(req,res)=>{
    let id = req.params.articleId;
    console.log(id)
    let article ={}
    await articlesCollection.findOne({articleId:id}).then((art)=>{
        article = art
    })
    let vis = article.visibility; 
    await articlesCollection.updateOne({articleId:id},
    {$set: {visibility:!vis}});
    res.send({message: 'Article deleted', payload:article})
}))


//exports
module.exports = userApp