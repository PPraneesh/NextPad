import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { MyContext } from '../../context-api/myContext';
import { userContext } from '../../context-api/userContext';
import { Link } from 'react-router-dom';

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
        <div>
            <h1>hey {user.name}</h1>
            <div className="page">
                {
                    user.genre.map((genre,index)=>{
                        return (
                            <div className="col" key={index}>
                                <h2>{genre} articles</h2>
                                <div className="row">
                                    {
                                        articles.map((article)=>{
                                            if(article.genre === genre){
                                                return (
                                                    <div className="article" key={article.articleId}>
                                                        <Link to={`/user-api/home/${article.articleId}`}>
                                                            <h3>{article.title}</h3>
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
            </div>

        </div>
    );
}
