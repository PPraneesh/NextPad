import { useContext,useEffect, useState } from "react"
import { userContext } from "../../context-api/userContext"
import axios from "axios"
import './UserProfile.css';

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
    console.log(user)
    return(
        <div>
            <div className='profile-card'>
            

            </div>
            <div class="card" >
            
            <div class="card-body">
<h5>User Info</h5>
            <p class="card-text">
            <h1>User Profile</h1>
            <h2>Username: {user.username}</h2>
            <h2>Name: {user.name}</h2>
            <h2>Email: {user.email}</h2>
            </p>
            </div>
            </div>
            
            <div>
            <h2>Your articles</h2>
{
    user.articles.map((articleId, index) => {
        return articles.filter(article => article.articleId === articleId)
            .map((article, index) => {
                return (
                    <div className="article" key={article.articleId}>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                    </div>
                )
            })
    })
}
            </div>
        </div>
    )
}