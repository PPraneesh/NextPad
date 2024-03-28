import axios from "axios";
import { useEffect, useState, useContext } from "react";
// import { MyContext } from '../../context-api/myContext';
import { userContext } from "../../context-api/userContext";
import { Link } from "react-router-dom";
import "./Home.css";

import { urlContext } from "../../context-api/urlContext";

export default function Home() {
  const {url} = useContext(urlContext)
  // let {loginStatus, setLoginStatus}= useContext(MyContext)
  let { user } = useContext(userContext);

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get(url + "user-api/home")
      .then((response) => {
        setArticles(response.data.payload);
      })
      .catch((error) => {
        console.log("ERROR IS ", error);
      });
  }, []);
  return (
    <div className="homediv">
      <h1>hey {user.name}</h1>
      <div className="page">
        {user.genre.map((genre, index) => {
          return (
            <div key={index}>
              <h3>{genre} articles</h3>
              <div  className="genre-article-cont">
                {articles.map((article) => {
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
            {articles.map((article) => (
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
    </div>
  );
}
