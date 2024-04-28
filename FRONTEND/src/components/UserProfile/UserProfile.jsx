import { useContext, useEffect, useState } from "react"
import { userContext } from "../../context-api/userContext"
import axios from "axios"
import './UserProfile.css';
import { useNavigate } from "react-router-dom";
import { axiosWithToken } from '../../axiosWithToken';
import { urlContext } from "../../context-api/urlContext";


export default function UserProfile() {
    const {url} = useContext(urlContext)
    let navigate = useNavigate()
    let { user } = useContext(userContext)
    const [userArticles, setUserArticles] = useState([])
    const api = axiosWithToken()
    useEffect(() => {
        api.get(url + 'user-api/user-profile/' + user.username).then((response) => {
            setUserArticles(response.data.payload)

        }).catch((error) => {
            console.log("ERROR IS ", error)
        })
    }, [])

    async function handleDelete(articleId, article) {
        await api.put(`${url}user-api/delete-article/${articleId}`);
        await api.get(url + 'user-api/user-profile/' + user.username).then((response) => {
            setUserArticles(response.data.payload)
        }).catch((error) => {
            console.log("ERROR IS ", error)
        })
    }

    function handleModify(articleId) {
        navigate('/user-api/modify-article/' + articleId)
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
                            userArticles.map((article) => {
                                if (article !== null) return (
                                    <div className="user-article" key={article.articleId}>
                                        <div className="article-header">
                                            <h3>{article.title}</h3>
                                            <span>{article.visibility ? "Public" : "Private"}</span>
                                        </div>
                                        <p>{article.description}</p>
                                        <button className='user-button green-button' onClick={() => handleModify(article.articleId)}>Modify</button>
                                        <button className={article.visibility ? "user-button visible" : "user-button"} onClick={() => handleDelete(article.articleId, article)}>{article.visibility ? "Make private" : "Make public"}</button>
                                    </div>
                                );
                            }
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}