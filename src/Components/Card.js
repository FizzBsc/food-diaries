import React from "react";
import '../index.css'

export default function Card(props){
    return(
        <div className="card-all">
            <img className="card-image" src={`./${props.card.image}`} alt="./food.jpg" />
            <div className="card-desc">
                <p><span className="card-rating">{rating(props.card.rating)}</span><br></br><span className="card-title">{props.card.title}</span></p>
                <p className="card-description">{props.card.description}</p>
            </div>
        </div>
        
    )
}

function rating (x){
    let star = "★"
    let empstar = "☆"

    star =star.repeat(x);
    empstar = empstar.repeat(5-x);
    return star+empstar;
}