import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import Article from './Article';
import _ from 'lodash'

const pageSize = 15;

function DataFetch() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(5);
    const [pagin, setPagin] = useState();
    // const [allarticles, setAllarticles] = useState(50);

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=${postPerPage}`)
            .then(data =>
                data.json()
            )
            .then(res => {
                console.log(res)
                setArticles(res)
                setPagin(_(res).slice(0).take(pageSize).value())
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [postPerPage])
    console.log(pagin)

    const paginate1 = (page) => {
        const start_index = (page - 1) * pageSize;
        const paginated_post = _(articles).slice(start_index).take(pageSize).value()
        setPagin(paginated_post)
        console.log(paginated_post)
    }
    const page_count = articles ? Math.ceil(articles.length / pageSize) : 0
    const pages = _.range(1, page_count + 1)

    //Get the current posts
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentArticle = articles.slice(indexOfFirstPost, indexOfLastPost);
    console.log(currentArticle)

    return (
        <div className="container mt-5">
            <div className="navBar">
                <h1 className="text-primary mb-3">Space Articles</h1>
                <select className="dropdown-text"
                    value={postPerPage} onChange={(e) => { setPostPerPage(e.target.value); }}>
                    <option value="5">News records: 5</option>
                    <option value="10">News records: 10</option>
                    <option value="15">News records: 15(max)</option>
                    <option value="20">News records: 20</option>
                    <option value="25">News records: 25</option>
                    <option value="30">News records: 30</option>
                </select>
            </div>
            <Article articles={articles} loading={loading} pagin={pagin} />

            <div className="pagination">
                {/* <nav className=" d-flex justify-content-center"> */}
                <ul>
                    {pages.map((page) => (
                        <li className="page-item">
                            <p className="page-link" onClick={() => paginate1(page)}>
                                {page}
                            </p>
                        </li>
                    ))}
                </ul>
                {/* </nav> */}
            </div>
        </div>
    )
}

export default DataFetch
