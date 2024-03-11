import React from 'react'
import './card.css'
import TodayIcon from '@mui/icons-material/Today';


export default function Cards(props) {
    return (
        <div className='card2'>
            
            <img src={props.items.image} alt='logo'/>
            <div>
                <h5>{props.items.title}</h5>
                <span className='fecha'>Fecha de Lanzamiento: <br></br><TodayIcon></TodayIcon>{props.items.fechaLanzamiento}</span>
                <p>{props.items.description}</p>
                <button type="button" class="btn btn-outline-primary">Comprar</button>
            </div>

        </div>
    )
}
