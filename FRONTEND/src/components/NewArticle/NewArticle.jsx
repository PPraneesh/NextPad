import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../context-api/userContext';
import axios from 'axios';
import './NewArticle.css';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { axiosWithToken } from '../../axiosWithToken';


import { urlContext } from "../../context-api/urlContext";


export default function NewArticle() {
    const {url} = useContext(urlContext)
    const { register, handleSubmit } = useForm();
    let { user } = useContext(userContext)
    let navigate = useNavigate()
    const onSubmit = data => {
        data = {
            articleId: uuidv4(),
            ...data,
            visibility: true,
            comments:[],
            username: user.username
        }
        console.log(data)
        axiosWithToken.post(url+'user-api/new-article', data)
            .then(res => {
                console.log(res.data)
                navigate('/user-api/home')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='container'>
            <div>
                <h1>Create New Article</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <button className='nav-button' type="submit">
                    Post
                </button>
                <div className="input-box">
                    <input {...register("title")} type="text" placeholder="Title" required />
                </div>
                <div className="input-box">
                    <input {...register("description")} type="textbox" placeholder="Description" required />
                </div>
                <div className="input-box">
                    <div className='styled-select'>
                        <label htmlFor="genre" >Genre: </label>
                        <select {...register("genre")} name="genre" required>
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
                    <input {...register("tags")} type="text" placeholder="Tags" required />
                </div>
                <div className="input-box">
                    <label htmlFor="ageGroup" color='white'>Age Group: </label>
                    <div className='styled-select'>
                        <select {...register("ageGroup")} name="ageGroup" className='form-select' required>
                            <option value="select" selected disabled>select</option>
                            <option value="13">13 below</option>
                            <option value="13-18">13-18</option>
                            <option value="18+">18+</option>
                        </select>
                    </div>
                </div>
                <div className="input-box" >
                    <label htmlFor="content" color='white'>Content: </label>
                    <textarea {...register("content")} type="text" className='contentInput' />
                </div>

            </form>

        </div>
    )
}