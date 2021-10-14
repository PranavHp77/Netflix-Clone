import React,{useEffect,useState} from 'react'
import './Rowpost.css'
import axios from '../Axios'
import { api_key,imageUrl } from '../../const/constants'

function Rowpost() {
    const [cards, setCards] = useState([])
    useEffect(() => {
        axios.get(`discover/tv?api_key=${api_key}&with_networks=213`).then(response=>{
            setCards(response.data.results)
        })
    }, [])
    return (
        <div className='row'>
            <h2>ClonFlix Originals</h2>
            <div className="posters">
                {cards.map((obj)=>
                    <img className='poster' src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                )}
            </div>
        </div>
    )
}

export default Rowpost
