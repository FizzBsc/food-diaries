import React from "react"
import ReactDOM from "react-dom"
import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import data from "./data";
import './index.css'

export default function App() {
  const cardArr = data.map(card =>{
    return (
      <Card 
        key = {card.id}
        card = {card}
      />
    )
})
  return (
    <div>
      <Navbar />
      <div className="rowcard">
            {cardArr}
        </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))
