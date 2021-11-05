import React from 'react'


export default function SearchArticle() {
    return (
        <div>
            <form action="/" method="get">
                <input 
                    type="text"
                    id="header-search"
                    placeholder="Ej: how to build a CRUD app..."
                    name="s"
                />
                <button type="submit">Search Articles</button>
            </form>
            
        </div>
    )
}