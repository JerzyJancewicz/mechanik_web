import React from "react";
import Img from "../images/5gwiazd.png"
import { opinieKlientowData } from "../data";

function OpinieBody(props){
    return(
        <div className="opinie-klientow-div-grid-child" key={props.key}>
            <img className="opinie-klientow-img" src={Img} alt=""></img>
            <p className="opinie-klientow-p">
                {props.data}
            </p>
        </div> 
    )
}

function OpinieKlientow(){
    return (
        <section id="opinie-klientow">
            <div id="opinie-klientow-div">
                <h1 id="opinie-klientow-h1">Opinie Klientów</h1>
                <div id="opinie-klientow-grid">
                   {opinieKlientowData.map(OpinieBody)}   
                </div>                  
            </div>
        </section>
    )
}

export default OpinieKlientow;