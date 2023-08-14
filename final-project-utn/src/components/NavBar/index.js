import React from "react";
import './style.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="title">
                <p className="titleText">Aamir & Hameeda</p>
            </div>
            <ul className="list">
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">About</a></li>
                <li><a href="#contact">Portfolio</a></li>
                <li><a href="#about">Awards</a></li>
                <li><a href="#about">Contact</a></li>
            </ul>
            <p className="telephone">+91 40 6678 4993</p>
        </nav>
    )
}

export default NavBar