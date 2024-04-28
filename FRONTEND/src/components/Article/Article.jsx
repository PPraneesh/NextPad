import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import './Article.css';
import { userContext } from '../../context-api/userContext';
import { useForm } from "react-hook-form";
import { useNavigate,useParams } from 'react-router-dom';
import { urlContext } from "../../context-api/urlContext";
import { axiosWithToken } from '../../axiosWithToken';


export default function Article(){
    const {url} = useContext(urlContext)
    const { register, handleSubmit } = useForm();
    const [article, setArticle] = useState({});
    const { user, setUser } = useContext(userContext)
    let [comments, setComments] = useState([{}])
    let navigate = useNavigate()
    const {articleId} = useParams();
    useEffect(()=>{
        const api = axiosWithToken()
        api.get(url+"user-api/home/"+articleId).then(res => {
            setArticle(res.data.payload)
        })
        .catch(err => {
            console.log(err)
        })
    }
    ,[comments])


    function onSubmit(data){
        data = {
            ...data,
            username: user.username,
            articleId: articleId
        }
        axiosWithToken.post(`${url}user-api/comment/${articleId}`, data)
        .then(res => {
            setComments([...comments,data])
            }).catch(err => {
                console.log(err)
            }
        )
    }

    return(
       <div className="page">

            <div className='articlepage'>
                <h1>{article.title}</h1>
                <h3>Description: {article.description}</h3>
                <h3>Genre: {article.genre}</h3>
                <p>{article.content}</p>
                <p>Creater: {article.username}</p>
            </div> 
            <div className="addcomment">
                <h3>Comments</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-box">
                        <input {...register("comment")} type="text" placeholder="Comment" required />
                    <button className="comment-btn" type='submit'>Comment</button>
                    </div>
                </form>
                <br />
            </div>
            <div className="comments">
                <h3>User Comments</h3>
                {article.comments && article.comments.map((comment, index) => (
                    <div key={index} className='comment-card'>
                        <h3>{index+1}. {comment.username}</h3>
                        <p>{comment.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}