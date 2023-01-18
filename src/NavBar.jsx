import React from "react";
import logo from "./images/logo3.png";

function navBar() {
    return (
        <nav class="navBar">
            <img id="logo" src ={logo} alt=""></img>
            <ul>
                <li><a href="/">O Nas</a></li>
                <li><a href="/">Dlaczego my?</a></li>
                <li><a href="/">Oferta</a></li>
                <li><a href="/">Opinie</a></li>
                <li><a href="/">Umów Wizytę</a></li>
                <li><a href="/">Kontakt</a></li>
             </ul>
            <div class="nav-overlay"></div>
            <button type="button" calss= "navButton">
                <span class="material-symbols-rounded">
                    menu
                </span>
            </button>
	        <div class="navBox">
                <li><a href="/">O Nas</a></li>
                <li><a href="/">Dlaczego my?</a></li>
                <li><a href="/">Oferta</a></li>
                <li><a href="/">Opinie</a></li>
                <li><a href="/">Umów Wizytę</a></li>
                <li><a href="/">Kontakt</a></li>
	        </div>
        </nav>
    )
}

export default navBar;