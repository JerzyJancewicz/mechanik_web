import React from "react";
import Img from "../images/image00022new.jpeg";


function NaszaOferta(){
    return(
        <section id="nasza-oferta">
            <div id="nasza-oferta-div">
                <div id="nasza-oferta-img-div">
                    <img id="nasza-oferta-img" src={Img} alt=""></img>
                </div>
                <div id="nasza-oferta-div-grid">
                    <h1 id="nasza-oferta-h1">Nasza oferta</h1>
                    <div className="nasza-oferta-div-grid-child">
                        <p className="nasza-oferta-p">
                            Kompleksowe naprawy alternatorów i rozruszników
                        </p>
                    </div>
                    <div className="nasza-oferta-div-grid-child">
                        <p className="nasza-oferta-p">
                            Naprawy układu klimatyzacji, przeglądy i kontrole instalacji klimatyzacji
                        </p>
                    </div>
                    <div className="nasza-oferta-div-grid-child">
                        <p className="nasza-oferta-p">
                            Naprawy instalacji elektrycznej w pojazdach ​samochodowych i motocyklach
                        </p>
                    </div>
                    <div className="nasza-oferta-div-grid-child">
                        <p className="nasza-oferta-p">
                            Naprawa silniczków wycieraczek, dmuchawy, ​wentylatorów chłodnicy i stacyjek
                        </p>
                    </div>
                    <div className="nasza-oferta-div-grid-child">
                        <p className="nasza-oferta-p">
                            Naprawy centralnych zamków i szyb ​elektrycznych
                        </p>
                    </div>
                    <div className="nasza-oferta-div-grid-child">
                        <p className="nasza-oferta-p">
                            Sprzedaż, testowanie i ładowanie akumulatorów
                        </p>
                    </div>
                    <div className="nasza-oferta-div-grid-child">
                        <p className="nasza-oferta-p">
                            Elektronika samochodowa - test komputerów ​ABS, AIRBAG i inne
                        </p>
                    </div>
                    <div className="nasza-oferta-div-grid-child">
                        <p className="nasza-oferta-p">
                            Naprawy oświetlenia samochodowego
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NaszaOferta;