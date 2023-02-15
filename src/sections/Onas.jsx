import React from "react";
import BackPhoto from "../images/back.png"
import Logo from "../images/logoG.png";

function Onas(){
    return (
        <section id="o-nas">
            <div id="o-nas-div">
                <div id="o-nas-div3"><img id="logo2" src ={Logo} alt=""></img></div>
                <div id="o-nas-div2">
                    <h1 id="o-nas-h1">TWÓJ ZAUFANY MECHANIK</h1>
                    <p id="o-nas-p">Jesteśmy ekspertami w elektromechnice motoryzacyjnej</p>
                </div>
                <img id="o-nas-img" src={BackPhoto} alt=""></img>
            </div>
        </section>
    )
}

export default Onas;