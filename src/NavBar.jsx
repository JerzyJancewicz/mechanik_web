import React, { useState, useRef } from "react";
import Logo from "./images/logo3.png";

function NavBar() {

    const[style, setStyle] = useState("nav-box");
    const[styleOverlay, setStyleOverlay] = useState("nav-overlay");
    const[isOpen, setOpen] = useState(false);

    const o_nas_ref = useRef("cs");

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

    // const onasRef = useRef(null);
    // const handleOnasClick = (event) => {
    //     event.preventDefault();
    //     onasRef.current.scrollIntoView({ behavior: "smooth" });
    //   };
    

    return (
        <nav className="nav-bar">
            <img id="logo" src ={Logo} alt=""></img>
            <div id="nav-div">
                <ul className="nav-bar-ul">
                    <li><a className="nav-bar-a" href="/">O Nas</a></li>
                    <li><a className="nav-bar-a" href="/">Dlaczego my?</a></li>
                    <li><a className="nav-bar-a" href="/">Oferta</a></li>
                    <li><a className="nav-bar-a" href="/">Opinie</a></li>
                    <li><a className="nav-bar-a" href="/">Umów Wizytę</a></li>
                    <li><a className="nav-bar-a" href="/">Kontakt</a></li>
                </ul>
            </div>
            <button type="button" className= "nav-button" onClick={handleClick}>
                <span className="material-symbols-rounded">
                    menu
                </span>
            </button>
            <div className={style}>
                <ul>
                    <li><a className="nav-box-a nav-bar-a" href="/">O Nas</a></li>
                    <li><a className="nav-box-a nav-bar-a" href="/">Dlaczego my?</a></li>
                    <li><a className="nav-box-a nav-bar-a" href="/">Oferta</a></li>
                    <li><a className="nav-box-a nav-bar-a" href="/">Opinie</a></li>
                    <li><a className="nav-box-a nav-bar-a" href="/">Umów Wizytę</a></li>
                    <li><a className="nav-box-a nav-bar-a" href="/">Kontakt</a></li>
                </ul>
            </div>
            <div className={styleOverlay} onClick={handleOverlay}></div>
        </nav>
    )
}

export default NavBar;