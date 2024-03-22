import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './Article.css';
import { useParams } from 'react-router-dom';

export default function Article(){
    const [article, setArticle] = useState({});

    let {articleId} = useParams();
    useEffect(()=>{
        axios.get(`https://potential-space-potato-9vr44vj9jpq36qw-3000.app.github.dev/user-api/home/${articleId}`)
        .then(res => {
            setArticle(res.data.payload)
        })
        .catch(err => {
            console.log(err)
        })
    }
    ,[articleId])
    console.log(article)

    return(
        <div className='articlepage'>
            <h1>{article.title}</h1>
            <p>{article.description}</p> 
            <p>{article.genre}</p>
            <p>{article.content}</p>
            <p>{article.username}</p>
            <p>{article.date}</p>
        </div>
    )
}