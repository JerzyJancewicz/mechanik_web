import React, {useState} from "react";
import {Link, animateScroll as scroll } from "react-scroll";
import Logo from "./images/logo3.png";

function NavBar() {

    const[style, setStyle] = useState("nav-box");
    const[styleOverlay, setStyleOverlay] = useState("nav-overlay");
    const[isOpen, setOpen] = useState(false);

    function handleClick(){
        if(isOpen === false){
            setStyle("nav-box nav-box-open");
            setStyleOverlay("nav-overlay nav-overlay-open");
            setOpen(true);
        }else{
            setStyleOverlay("nav-overlay");
            setStyle("nav-box");
            setOpen(false);
        }        
    }

    function handleOverlay(){
        setStyleOverlay("nav-overlay");
        setStyle("nav-box");
        setOpen(false);
    }

    return (
        <nav className="nav-bar">
            <img id="logo" src ={Logo} alt=""></img>
            <div id="nav-div">
                <ul className="nav-bar-ul">
                    <li><Link to="poznaj-nas" smooth={true} duration={500}><a className="nav-bar-a" href="/">O Nas</a></Link></li>
                    <li><Link to="dlaczego-my" smooth={true} duration={500}><a className="nav-bar-a" href="/">Dlaczego my?</a></Link></li>
                    <li><Link to="nasza-oferta" smooth={true} duration={500}><a className="nav-bar-a" href="/">Oferta</a></Link></li>
                    <li><Link to="opinie-klientow" smooth={true} duration={500}><a className="nav-bar-a" href="/">Opinie</a></Link></li>
                    <li><Link to="umow-wiz" smooth={true} duration={500}><a className="nav-bar-a" href="/">Umów Wizytę</a></Link></li>
                    <li><Link to="chuj" smooth={true} duration={500}><a className="nav-bar-a" href="/">Kontakt</a></Link></li>
                </ul>
            </div>
            <button type="button" className= "nav-button" onClick={handleClick}>
                <span className="material-symbols-rounded">
                    menu
                </span>
            </button>
            <div className={style}>
                <ul>
                    <li><Link to="poznaj-nas" smooth={true} duration={500}><a className="nav-box-a nav-bar-a" href="/">O Nas</a></Link></li>
                    <li><Link to="dlaczego-my" smooth={true} duration={500}><a className="nav-box-a nav-bar-a" href="/">Dlaczego my?</a></Link></li>
                    <li><Link to="nasza-oferta" smooth={true} duration={500}><a className="nav-box-a nav-bar-a" href="/">Oferta</a></Link></li>
                    <li><Link to="opinie-klientow" smooth={true} duration={500}><a className="nav-box-a nav-bar-a" href="/">Opinie</a></Link></li>
                    <li><Link to="umow-wizyte" smooth={true} duration={500}><a className="nav-box-a nav-bar-a" href="/">Umów Wizytę</a></Link></li>
                    <li><Link to="" smooth={true} duration={500}><a className="nav-box-a nav-bar-a" href="/">Kontakt</a></Link></li>
                </ul>
            </div>
            <div className={styleOverlay} onClick={handleOverlay}></div>
        </nav>
    )
}

export default NavBar;