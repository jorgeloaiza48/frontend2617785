import React from 'react'
import './card.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Cards(props) {
    return (

        <div className="card2">
            <img src={props.items.image} alt="logo" />
            <div >
                <h5>{props.items.title}</h5>
                <span className={"fecha"}>Fehca de lanzamiento: <br></br><em><CalendarMonthIcon></CalendarMonthIcon>  {props.items.fechaLanzamiento}</em></span>
                <p> {props.items.description}</p>
                <button type="button" class="btn btn-outline-primary">Comprar</button>
            </div>


        </div>
    )
}
