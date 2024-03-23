import React,{useState, useEffect, useContext} from 'react';
import axios from 'axios';
import './Article.css';
import { userContext } from '../../context-api/userContext';
import { useForm } from "react-hook-form";
import { useNavigate,useParams } from 'react-router-dom';

export default function Article(){
    const { register, handleSubmit } = useForm();
    const [article, setArticle] = useState({});
    const { user, setUser } = useContext(userContext)
        const [comments, setComments] = useState([{}])
    let navigate = useNavigate()
    const {articleId} = useParams();
    useEffect(()=>{
        console.log("articleId",articleId)
        axios.get("https://potential-space-potato-9vr44vj9jpq36qw-3000.app.github.dev/user-api/home/"+articleId).then(res => {
            setArticle(res.data.payload)
        })
        .catch(err => {
            console.log(err)
        })
    }
    ,[comments])
    console.log("article",article)

    function onSubmit(data){
        data = {
            ...data,
            username: user.username,
            articleId: articleId
        }
        setComments([...comments, data])
        axios.post(`https://potential-space-potato-9vr44vj9jpq36qw-3000.app.github.dev/user-api/comment/${articleId}`, data)
            .then(res => {
                navigate(`/user-api/home/${articleId}`)
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
                    <div className="comment-box">
                        <input {...register("comment")} type="text" placeholder="Comment" required />
                    </div>
                    <button type='submit'>send</button>
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