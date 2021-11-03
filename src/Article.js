import React from 'react'
import {Link} from 'react-router-dom'

function Article({ articles, loading, pagin }) {
    console.log(articles)
    console.log(pagin)
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        
            <div className="article_container">
                <ul>
                    {pagin ? pagin.map(article => (
                        <li key={article.id}>
                            {article.title}
                            <div className="article_image">
                                <img src={article.imageUrl} alt="article_img" />
                                <div className="articles_overview">
                                    <h3>Sources from: </h3>
                                    <p>{article.newsSite}</p>
                                    <Link to={`/article/${article.id}`}>
                                    <p>Know more...</p>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    )) : null}
                </ul>
                
            </div>
        
    );
}

export default Article
