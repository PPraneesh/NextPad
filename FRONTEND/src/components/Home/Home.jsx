import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { MyContext } from '../../context-api/myContext';
export default function Home() {
    const {loginStatus, setLoginStatus}= useContext(MyContext)
    const [articles, setArticles] = useState([])
    useEffect(()=>{
        let articlesFetched = axios.get('https://potential-space-potato-9vr44vj9jpq36qw-3000.app.github.dev/user-api/home').then((response)=>{
            setArticles(response.data.payload)
        }).catch((error)=>{
            console.log("ERROR IS ",error)
        })
    },[])
    return (
    <div>
       <h1>hey </h1>
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
