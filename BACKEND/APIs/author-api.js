const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const authorApp = express.Router()
const {createUserOrAuthor,userOrAuthorLogin} = require('./Util')

let authorsCollection, articlesCollection
authorApp.use((req,res,next)=>{
    authorsCollection = req.app.get('authorsCollection')
    articlesCollection = req.app.get('articlesCollection')
    next()
})
authorApp.post('/user',expressAsyncHandler(createUserOrAuthor))
authorApp.post('/login',expressAsyncHandler(userOrAuthorLogin))
authorApp.post('/new-article',expressAsyncHandler(async(req,res)=>{
    const article = req.body;
    await articlesCollection.insertOne(article);
    res.send({message: 'Article created'})
}))
authorApp.get('/articles/:username',expressAsyncHandler(async(req,res)=>{
    const usernameOfAuthor = req.params.username;
    const articles = await articlesCollection.find({username:usernameOfAuthor,status:true}).toArray();
    res.send({message:"articles",payload:articles})
}))

authorApp.put("/article",expressAsyncHandler(async(req,res)=>{
        const modifiedArticle = req.body;
        await articlesCollection.updateOne({articleid:modifiedArticle.articleid},
            {$set: {...modifiedArticle}});
        res.send({message: 'Article modified'})
}))

authorApp.put("/article/:id",expressAsyncHandler(async(req,res)=>{
    let article = req.body;
    await articlesCollection.updateOne({articleid:article.articleid},
        {$set: {...article}});
    res.send({message: 'Article deleted'})
}))



module.exports = authorApp