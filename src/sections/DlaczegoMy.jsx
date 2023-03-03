import React from "react";
import Img from "../images/dlaczego-my-tick.png";
import {dlaczegoMyData} from "../data.js";

function DlaczegoBody(props){
    return (
        <div key={props.key}>
            <img className="dlaczego-my-img" src={Img} alt=""></img>
            <h2 className="dlaczego-my-h2">{props.h1}</h2>
            <p className="dlaczego-my-p">{props.data}</p>
        </div>
    )
}

function DlaczegoMy(){
    return (
        <section id="dlaczego-my">
            <div id="dlaczego-my-div">
                <div id="dlaczego-my-h1-div"><h1 id="dlaczego-my-h1">Dlaczego my</h1></div>
                {dlaczegoMyData.map(DlaczegoBody)}
            </div>
        </section>
    )
}

export default DlaczegoMy;