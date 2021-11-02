import { isElement } from 'lodash';
import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"

function About({match}) {
useEffect(() => {
    fetchItem()
    console.log(match)
}, [])

const [item, setItem] = useState({});

const fetchItem = async () => {
    const fetchItem = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/`)
    const item = await fetchItem.json()

    console.log(item)
}

    return (
        <div>
            <h1>About</h1>
        </div>
    )
}

export default About
