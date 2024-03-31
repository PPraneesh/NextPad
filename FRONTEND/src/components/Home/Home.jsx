import axios from "axios";
import { useEffect, useState, useContext } from "react";
// import { MyContext } from '../../context-api/myContext';
import { userContext } from "../../context-api/userContext";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { axiosWithToken } from '../../axiosWithToken';
import { urlContext } from "../../context-api/urlContext";

export default function Home() {
  const { url } = useContext(urlContext)
  // let {loginStatus, setLoginStatus}= useContext(MyContext)
  let [user, setUser] = useState([])
  const navigate = useNavigate()

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('user')))
  }, [])

  useEffect(() => {
    console.log(user)
    axiosWithToken.get(url + "user-api/home")
      .then((response) => {
        console.log(response.data)
        console.log("user", user)
        if (response.data.message === 'Unauthorized access') {
          navigate('/user-api/login')
        }
        else {
          setArticles(response.data.payload)
        }
      })
      .catch((error) => {
        console.log("ERROR IS ", error);
      });
  }, []);

  return (
    <div className="homediv">
      <h1>hey {user.name}</h1>
      <div className="page">
        { user.genre && user.genre.map((genre, index) => {
          return (
            <div key={index}>
              <h3>{genre} articles</h3>
              <div className="genre-article-cont">
                {articles && articles.map((article) => {
                  if (article.genre === genre) {
                    return (
                      <div className="article" key={article.articleId}>
                        <Link to={`/user-api/home/${article.articleId}`}>
                          <h4>{article.title}</h4>
                        </Link>
                        <p>{article.description}</p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
        <div>
          <h3>All articles</h3>
          <div className="genre-article-cont">
            {articles && articles.map((article) => (
              <div className="article" key={article.articleId}>
                <Link to={`/user-api/home/${article.articleId}`}>
                  <h4>{article.title}</h4>
                </Link>
                <p>{article.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1>hai</h1>
    </div>
  );
}
