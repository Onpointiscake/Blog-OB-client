import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link }  from "react-router-dom";
import {useNavigate} from 'react-router-dom';

export default function CreateArticle() { 
    
    const navigate = useNavigate();

    // Post api calls here
    function createArticle(event) {
        event.preventDefault()

        const tituloArticle = event.target.elements.tituloarticulo.value
        const contenidoArticle = event.target.elements.contenidoarticulo.value
        /**
        axios.post('/api/articulo', {
            titulo: tituloArticle,
            contenido: contenidoArticle
        }).then(response => console.log(response))
            .catch(error => console.log(error))
         */
        console.log(tituloArticle, contenidoArticle)
        // Cambiar esto a que vaya a la página de ReadArticle/:id 
        // en vez de a Home
        navigate('/Article/:id_article')
    }


           return (
            <div>
            <form onSubmit={createArticle}
                className='createpost__form'>
                <h1>Write a Story</h1>
                <input 
                type="text"
                name="tituloarticulo"
                placeholder="Enter Title" 
                required
                    />
                <br />
                <br />
                <textarea 
                type="text"
                name="contenidoarticulo"
                placeholder="Write a Story" 
                required></textarea>
                <br />
                <br />
                <button 
                    
                >Save Post</button>
            </form>
        
                <Link to="/"> <button>Cancel</button> </Link>
            </div>
           )
    
}