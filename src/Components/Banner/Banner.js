import React, { useEffect, useState } from 'react'
import { api_key,imageUrl } from '../../const/constants'
import "./Banner.css"
import axios from '../Axios'

function Banner() {
    const [movie, setmovie] = useState()

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${api_key}&language=en-US`).then((response) => {
            console.log(response.data.results[0])
            setmovie(response.data.results[0])
        })
    }, [])
    return (
        
        <div
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})`}}
        className="banner">
            <div className="content">
                <h1 className='title'>{movie ? movie.name : ''}</h1>
                <div className='banner-buttons'>
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div>
                <h1 className="description">{movie ? movie.overview : ''}</h1>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner
