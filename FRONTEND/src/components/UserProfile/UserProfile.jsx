import { useContext,useEffect, useState } from "react"
import { userContext } from "../../context-api/userContext"
import axios from "axios"

export default function UserProfile(){
    let {user} = useContext(userContext)
    const [articles, setArticles] = useState([])
    useEffect(()=>{
        let articlesFetched = axios.get('https://potential-space-potato-9vr44vj9jpq36qw-3000.app.github.dev/user-api/home').then((response)=>{
            setArticles(response.data.payload)
        }).catch((error)=>{
            console.log("ERROR IS ",error)
        })
    },[])
    return(
        <div>
            <h1>User Profile</h1>
            <h2>Username: {user.username}</h2>
            <h2>Name: {user.name}</h2>
            <h2>Email: {user.email}</h2>
            
            <div>
                <h2>Your articles</h2>
                {
                    user.articles.map((articleId, index)=>{
                        articles.map((article)=>{
                            if(article.articleId === articleId){
                                return (
                                    <div className="article" key={article.articleId}>
                                        <h3>{article.title}</h3>
                                        <p>{article.description}</p>
                                    </div>
                                )
                            }
                    })
                })
            }
            </div>
        </div>
    )
}