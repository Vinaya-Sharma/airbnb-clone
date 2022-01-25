import React from "react"
import logo from "./assets/airbnb-logo.png"
import grid from "./assets/grid.png"

export default function Top() {
    return (
        <div>
        <nav>
            <img src={logo} className="nav--logo" />
        </nav>
        <section className="hero">
            <img src={grid} className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section> 
        </div>
    )
}

