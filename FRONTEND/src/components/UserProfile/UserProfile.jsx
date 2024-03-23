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
        
        <div className="row">
            <div className="col" id="a1">
            <div className="card">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/026/619/142/small_2x/default-avatar-profile-icon-of-social-media-user-photo-image-vector.jpg" alt="card-img" classname="card-img-top"/>
            <div className="card-body">
            <div className="card-text">
            <h3>User Profile</h3>
            <h4>Username: {user.username}</h4>
            <h4>Name: {user.name}</h4>
            <h4>Email: {user.email}</h4>
            </div>
            </div>
            </div>
            </div>
            <div className="col" id="a2">
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