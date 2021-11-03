import React, { useState, useEffect } from 'react'
import { useParams } from "react-router"
import { useHistory } from 'react-router-dom'

function About() {
  const params = useParams()
  const history = useHistory();

  const [items, setItem] = useState([]);
  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
      .then(data =>
        data.json()
      )
      .then(res => {
        console.log(res);
        setItem(res)
      }
      )
      .catch(err => console.error(err));
  }, [])
  console.log(params.id);
  const article = items.find(item => item.id == params.id);
  console.log(article);


  const goBack = () => {
    history.push(`/`);
  };


  return (
    <div className="about_page">
      <div className="navBar">
        <h1 className="text-primary mb-3">About The Articles</h1>
      </div>
      <div class="article_container">
        {article ? 
        <div>OVERVIEW : {article.summary} 
        <h4> For more info follow this link: {article.url}</h4>
        <img className="article_image" src={article.imageUrl} alt="article_img" />
        Published at: {article.publishedAt}
        <h4><button onClick={() => goBack()}>Go Back</button></h4>
        </div>
         : null}
      </div>
    </div>
  )
}

export default About
