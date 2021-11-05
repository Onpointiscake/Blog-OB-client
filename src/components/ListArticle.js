import React, {useState} from 'react'
import Article from './Article'
import SearchArticle from './SearchArticle'

export default function ListArticle() {
    // Do Api call /get articles
    const articles = [
        { id: '1', titulo: 'This first post is about React' },
        { id: '2', titulo: 'This next post is about Preact' },
        { id: '3', titulo: 'We have yet another React post!' },
        { id: '4', titulo: 'This is the fourth and final post' },
    ]

    
    return (
        <div>
            <h5>This Should Render a List of Articles</h5>
            {articles.map((article)=> (
                <Article key={article.id} titulo={article.titulo} />
            ))}
        </div>
    )
}