import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Home() {
    const [articles, setArticles] = useState([])
    useEffect(()=>{
        let articlesFetched = axios.get('http://localhost:3000/user-api/home').then((response)=>{
            setArticles(response.data.payload)
        }).catch((error)=>{
            console.log("ERROR IS ",error)
        })
    },[])
    return (
    <div>
       <h1>hey</h1>
        {
            articles.map((article,index)=>{
            return(
                <div key={index}>
                    <h1>{article.articleName}</h1>
                    <p>{article.articleDescription}</p>
                </div>
            )
        })}
    </div>
    );
    }
