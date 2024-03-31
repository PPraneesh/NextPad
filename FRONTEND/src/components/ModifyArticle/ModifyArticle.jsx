import {useContext, useState, useEffect} from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosWithToken } from '../../axiosWithToken';

import { urlContext } from "../../context-api/urlContext";

export default function ModifyArticle() {
    const {url} = useContext(urlContext)
    const { register, handleSubmit } = useForm();
    let navigate = useNavigate()
    let {articleId} = useParams()
    const [article, setArticle] = useState({})


    useEffect(() => {
        axiosWithToken.get(url + 'user-api/home/' + articleId).then((response) => {
            setArticle(response.data.payload)
        }).catch((error) => {
            console.log("ERROR IS ", error)
        })
    } , [])
    const onSubmit = data => {  
        console.log(article)
        data ={
            ...article,
            articleId: article.articleId
        }
        console.log("dara   ",data)
        axiosWithToken.put(url+'user-api/modify-article', data)
            .then(res => {
                console.log(res.data)
                navigate('/user-api/home/'+articleId)
            })
            .catch(err => {
                console.log(err)
            })
    }
///
const handleChange = (e) => {
    let { name, value } = e.target;
    setArticle({ ...article, [name]: value }); 
    console.log(article)
    // setFormData({ ...formData, [name]: value });
    // console.log("form mmmmm",formData)
};
///
    return (
        <div className='container'>
            <div>
                <h1>Update Your Article</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <button className='nav-button' type="submit">
                    Modify Post
                </button>
                <div className="input-box">
                <input {...register("title")} type="text" placeholder="Title" required value={article.title} onChange={handleChange} />
                </div>
                <div className="input-box">
                    <input {...register("description")} type="textbox" placeholder="Description" required value={article.description} onChange={handleChange} />
                </div>
                <div className="input-box">
                    <div className='styled-select'>
                        <label htmlFor="genre" >Genre: </label>
                        <select {...register("genre")} name="genre" required value={article.genre} onChange={handleChange}>
                            <option value="select" selected disabled>select</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Humor">Humor</option>
                            <option value="Mystery">Mystery</option>
                            <option value="Romance">Romance</option>
                            <option value="Thriller">Thriller</option>
                            <option value="LGBTQ+">LGBTQ+</option>
                            <option value="Horror">Horror</option>
                            <option value="Sci-fi">Sci-fi</option>
                            <option value="Paranormal">Paranormal</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Poetry">Poetry</option>
                            <option value="Action">Action</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="input-box">
                    <input {...register("tags")} type="text" placeholder="Tags" required value={article.tags} onChange={handleChange} />
                </div>
                <div className="input-box">
                    <label htmlFor="ageGroup" color='white'>Age Group: </label>
                    <div className='styled-select'>
                        <select {...register("ageGroup")} name="ageGroup" className='form-select' required value={article.ageGroup} onChange={handleChange}>
                            <option value="select" selected disabled>select</option>
                            <option value="13">13 below</option>
                            <option value="13-18">13-18</option>
                            <option value="18+">18+</option>
                        </select>
                    </div>
                </div>
                <div className="input-box" >
                    <label htmlFor="content" color='white'>Content: </label>
                    <textarea {...register("content")} type="text" className='contentInput' value={article.content} onChange={handleChange} />
                </div>

            </form>

        </div>
    )
}