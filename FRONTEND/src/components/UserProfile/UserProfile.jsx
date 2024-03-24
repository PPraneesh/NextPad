import { useContext, useEffect, useState } from "react"
import { userContext } from "../../context-api/userContext"
import axios from "axios"
import './UserProfile.css';

export default function UserProfile() {
    let { user } = useContext(userContext)
    const [articles, setArticles] = useState([])
    useEffect(() => {
        let articlesFetched = axios.get('https://potential-space-potato-9vr44vj9jpq36qw-3000.app.github.dev/user-api/home').then((response) => {
            setArticles(response.data.payload)
        }).catch((error) => {
            console.log("ERROR IS ", error)
        })
    }, [])
    console.log(user)

    function handleDelete(articleId, article) {
            axios.put(`https://potential-space-potato-9vr44vj9jpq36qw-3000.app.github.dev/user-api/delete-article/${articleId}`);
    }
    function handleModify(articleId){
        console.log('modify function');
    }

    return (

        <div className='userprofilediv'>
            <div className="userprofilecard">
                <div className="profilecard">
                    <div className="card-body">
                        <div className="card-text">
                            <h3>User Profile</h3>
                            <h4>Username: {user.username}</h4>
                            <h4>Name: {user.name}</h4>
                            <h4>Email: {user.email}</h4>
                        </div>
                    </div>
                    <img className='imggg' src="https://static.vecteezy.com/system/resources/thumbnails/026/619/142/small_2x/default-avatar-profile-icon-of-social-media-user-photo-image-vector.jpg" alt="card-img" classname="card-img-top" />
                </div>
            </div>
            <div className="articlescard">
                <h2>Your articles</h2>
                <div className="userArticles">
                    {
                        user.articles.map((articleId, index) => {
                            return articles.filter(article => article.articleId === articleId)
                                .map((article, index) => {
                                    return (
                                        <div className="articleProfile" key={article.articleId}>
                                            <h3>{article.title}</h3>
                                            <p>{article.description}</p>
                                            <button className='btn-modify' onClick={()=>handleModify(articleId)}>modify</button>
                                            <button onClick={() => handleDelete(articleId, article)}>delete</button>
                                            <span>{article.visibility ? "Public":"Private"}</span>
                                        </div>
                                    );
                                });
                        })
                    }
                </div>
            </div>
        </div>
    )
}