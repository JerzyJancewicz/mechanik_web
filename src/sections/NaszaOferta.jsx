import React from "react";
import Img from "../images/image00022new.jpeg";
import {naszaOfertaData} from "../data.js"

function Oferta(props){
    return(
        <div className="nasza-oferta-div-grid-child" key={props.key}>
            <p className="nasza-oferta-p">
                {props.data}
            </p>
        </div>
    );
}

function NaszaOferta(){
    return(
        <section id="nasza-oferta">
            <div id="nasza-oferta-div">
                <div id="nasza-oferta-img-div">
                    <img id="nasza-oferta-img" src={Img} alt=""></img>
                </div>
                <div id="nasza-oferta-div-grid">
                    <h1 id="nasza-oferta-h1">Nasza oferta</h1>
                    {naszaOfertaData.map(Oferta)}
                </div>
            </div>
        </section>
    )
}

export default NaszaOferta;