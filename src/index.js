import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import Top from "./components/Top"
import Card from "./components/Main"

//props 
import data from "./data"

function App(){
    const cards = data 
    const elems = data.map(card => {
        return <Card 
        id = {card.id}
        card = {card}
        />
    })
    return(
    <div className = "all">
        <Top/>
        <div className="cards">
            {elems}
        </div>
    </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById("root"))