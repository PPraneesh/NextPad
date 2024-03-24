import { useContext, useEffect, useState } from "react"
import { userContext } from "../../context-api/userContext"
import axios from "axios"
import './UserProfile.css';
const url = "http://localhost:3000/"

export default function UserProfile() {
    let { user } = useContext(userContext)
    const [articles, setArticles] = useState([])
    useEffect(() => {
        axios.get(url+'user-api/home').then((response) => {
            setArticles(response.data.payload)
        }).catch((error) => {
            console.log("ERROR IS ", error)
        })
    }, [])
    console.log(user)

    function handleDelete(articleId, article) {
            axios.put(`${url}user-api/delete-article/${articleId}`);
    }
    function handleModify(articleId){
        console.log('modify function');
    }

    return (
        <div className='userprofilediv'>
        <div >
            <div className="userprofilecard">
                <div className="profilecard">
                    <div className="card-body">
                        <div>
                            <h3>User Profile</h3>
                            <h4>Username: {user.username}</h4>
                            <h4>Name: {user.name}</h4>
                            <h4>Email: {user.email}</h4>
                        </div>
                    </div>
                    <img className='imggg' src="https://static.vecteezy.com/system/resources/thumbnails/026/619/142/small_2x/default-avatar-profile-icon-of-social-media-user-photo-image-vector.jpg" alt="card-img" />
                </div>
            </div>
            <div className="articlescard">
                <h2>Your articles</h2>
                <div className="userArticles">
                    {
                        user.articles.map((articleId) => {
                            return articles.filter(article => article.articleId === articleId)
                                .map((article) => {
                                    return (
                                        <div className="user-article" key={article.articleId}>
                                            <h3>{article.title}</h3>
                                            <p>{article.description}</p>
                                            <button className='nav-button' onClick={()=>handleModify(articleId)}>modify</button>
                                            <button className="nav-button" onClick={() => handleDelete(articleId, article)}>delete</button>
                                            <span>{article.visibility ? "Public":"Private"}</span>
                                        </div>
                                    );
                                });
                        })
                    }
                </div>
            </div>
        </div>
        </div>
    )
}