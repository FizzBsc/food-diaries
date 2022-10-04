import React from "react";
import '../index.css'

export default function Navbar(){
    return(
        <div className="nav-head">
            <img className="food-icon" src="./foodicon.png" alt="food" />
            <p className="nav-title">My Food Diaries</p>
        </div>
        
    )
}