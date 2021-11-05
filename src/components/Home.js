import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import CreateArticle from './CreateArticle'
import ListArticle from './ListArticle'
import SearchArticle from './SearchArticle'


export default function Home() {

    /*
    const [createMode, setCreateMode] = useState(false)
    function createArticle() {
        setCreateMode(true)
        console.log(createMode)
    }
    */
    
  
        return (
            <div>
                <h2>This is the Home Page</h2>
               <Link to="/CreateArticle"><button>Open a topic</button> </Link>
                {/* Future Feature --- <SearchArticle /> ---  */}
                <ListArticle />
            </div>
        )


}