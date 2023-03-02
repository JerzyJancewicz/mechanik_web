import React, {useState} from "react";
import {Link} from "react-scroll";
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
            <Link to="o-nas" smooth={true} duration={800}><img id="logo" src ={Logo} alt=""></img></Link>
            <div id="nav-div">
                <ul className="nav-bar-ul">
                    <li><Link className="nav-bar-a" to="poznaj-nas" smooth={true} duration={800} offset={-90}>O Nas</Link></li>
                    <li><Link className="nav-bar-a" to="dlaczego-my" smooth={true} duration={800} offset={-105}>Dlaczego my?</Link></li>
                    <li><Link className="nav-bar-a" to="nasza-oferta" smooth={true} duration={800} offset={-70}>Oferta</Link></li>
                    <li><Link className="nav-bar-a" to="opinie-klientow" smooth={true} duration={800} offset={-160}>Opinie</Link></li>
                    <li><Link className="nav-bar-a" to="umow-wiz" smooth={true} duration={800} offset={-100}>Umów Wizytę</Link></li>
                    <li><Link className="nav-bar-a" to="nasza-lok" smooth={true} duration={800}>Kontakt</Link></li>
                </ul>
            </div>
            <button type="button" className= "nav-button" onClick={handleClick}>
                <span className="material-symbols-rounded">
                    menu
                </span>
            </button>
            <div className={style}>
                <ul>
                    <li><Link className="nav-bar-a nav-box-a" to="poznaj-nas" smooth={true} duration={800} offset={-90}>O Nas</Link></li>
                    <li><Link className="nav-bar-a nav-box-a" to="dlaczego-my" smooth={true} duration={800} offset={-50}>Dlaczego my?</Link></li>
                    <li><Link className="nav-bar-a nav-box-a" to="nasza-oferta" smooth={true} duration={800} offset={-80}>Oferta</Link></li>
                    <li><Link className="nav-bar-a nav-box-a" to="opinie-klientow" smooth={true} duration={800} offset={-150}>Opinie</Link></li>
                    <li><Link className="nav-bar-a nav-box-a" to="umow-wiz" smooth={true} duration={800}>Umów Wizytę</Link></li>
                    <li><Link className="nav-bar-a nav-box-a" to="nasza-lok" smooth={true} duration={800}>Kontakt</Link></li>
                </ul>
            </div>
            <div className={styleOverlay} onClick={handleOverlay}></div>
        </nav>
    )
}

export default NavBar;