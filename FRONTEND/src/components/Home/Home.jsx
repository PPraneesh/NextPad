import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { MyContext } from '../../context-api/myContext';
import { userContext } from '../../context-api/userContext';
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home() {
    const {loginStatus, setLoginStatus}= useContext(MyContext)
    const {user, setUser} = useContext(userContext)

    const [articles, setArticles] = useState([])
    useEffect(()=>{
        let articlesFetched = axios.get('https://potential-space-potato-9vr44vj9jpq36qw-3000.app.github.dev/user-api/home').then((response)=>{
            setArticles(response.data.payload)
        }).catch((error)=>{
            console.log("ERROR IS ",error)
        })
    },[])
    return (
        <div className='homediv'>
            <h1>hey {user.name}</h1>
            <div className="page">
                {
                    user.genre.map((genre,index)=>{
                        return (
                            <div className="h-col" key={index}>
                                <h3>{genre} articles</h3>
                                <div className="h-row">
                                    {
                                        articles.map((article)=>{
                                            if(article.genre === genre){
                                                return (
                                                    <div className="article" key={article.articleId}>
                                                        <Link to={`/user-api/home/${article.articleId}`}>
                                                            <h4>{article.title}</h4>
                                                        </Link>
                                                        <p>{article.description}</p>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                <div className='h-col'>
                <h3>All articles</h3>
        <div className="h-row-all">
          {
            articles.map((article) => (
              <div className="article" key={article.articleId}>
                <Link to={`/user-api/home/${article.articleId}`}>
                  <h4>{article.title}</h4>
                </Link>
                <p>{article.description}</p>
              </div>
            ))
          }
        </div>
                </div>
            </div>

        </div>
    );
}
