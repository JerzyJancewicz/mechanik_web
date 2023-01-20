import React, { useState } from "react";
import Logo from "./images/logo3.png";

function NavBar() {

    const[style, setStyle] = useState("nav-box");
    const[styleOverlay, setStyleOverlay] = useState("nav-overlay");

    function handleClick(){
        setStyle("nav-box nav-box-open");
        setStyleOverlay("nav-overlay nav-overlay-open");
    }

    function handleOverlay(){
        setStyleOverlay("nav-overlay");
        setStyle("nav-box");
    }

    return (
        <nav className="nav-bar">
            <img id="logo" src ={Logo} alt=""></img>
            <ul className="nav-bar-ul">
                <li><a class="nav-bar-a" href="/">O Nas</a></li>
                <li><a class="nav-bar-a" href="/">Dlaczego my?</a></li>
                <li><a class="nav-bar-a" href="/">Oferta</a></li>
                <li><a class="nav-bar-a" href="/">Opinie</a></li>
                <li><a class="nav-bar-a" href="/">Umów Wizytę</a></li>
                <li><a class="nav-bar-a" href="/">Kontakt</a></li>
            </ul>
            <button type="button" className= "nav-button" onClick={handleClick}>
                <span className="material-symbols-rounded">
                    menu
                </span>
            </button>
            <div className={style}>
                <ul>
                    <li><a class="nav-box-a nav-bar-a" href="/">O Nas</a></li>
                    <li><a class="nav-box-a nav-bar-a" href="/">Dlaczego my?</a></li>
                    <li><a class="nav-box-a nav-bar-a" href="/">Oferta</a></li>
                    <li><a class="nav-box-a nav-bar-a" href="/">Opinie</a></li>
                    <li><a class="nav-box-a nav-bar-a" href="/">Umów Wizytę</a></li>
                    <li><a class="nav-box-a nav-bar-a" href="/">Kontakt</a></li>
                </ul>
            </div>
            <div className={styleOverlay} onClick={handleOverlay}></div>
        </nav>
    )
}

export default NavBar;