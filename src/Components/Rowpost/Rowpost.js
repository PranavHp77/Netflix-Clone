import React,{useEffect,useState} from 'react'
import './Rowpost.css'
import axios from '../Axios'
import { api_key, imageUrl } from '../../const/constants'
import YouTube from 'react-youtube'


function Rowpost(props) {
    const [cards, setCards] = useState([])
    const [yid, setyid] = useState('')
    useEffect(() => {
        axios.get(props.url).then(response=>{
            setCards(response.data.results)
        })
    }, [])
    const opts = {
        height: '800px',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    
    const handleMovie=(id)=>{
      axios.get(`/movie/${id}/videos?api_key=${api_key}&language=en-US`).then(response=>{
        if(response.data.results.length!==0){
            setyid(response.data.results[0])
        }
        else{
            console.log('Not available')
        }
      })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {cards.map((obj)=>
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                )}
            </div>
        
        {yid && <YouTube videoId={yid.key} opts={opts} />}    
        </div>
    )
}

export default Rowpost
