import React from "react";

function NaszaLokalizacja(){
    return(
        <section id="nasza-lok">
            <div id="nasza-lok-div">
                <div id="nasza-lok-div2">
                    <h2 id="nasza-lok-h2">Nasza lokalizacja</h2>
                    <p id="nasza-lok-p-big">Białostoczek 1, 15-869 Białystok</p>
                    <p className="nasza-lok-p2">poniedziałek – piątek: 08:00–16:30</p>
                    <p className="nasza-lok-p2">sobota: 08:00–13:00</p>
                    <p className="nasza-lok-p2">niedziela: zamknięte</p>
                    <p className="nasza-lok-tel">85 652 34 50</p>
                    <p className="nasza-lok-tel">+48 798 047 870</p>
                </div>
                <div id="nasza-lok-map">
                </div>
            </div>
        </section>
    )
}

export default NaszaLokalizacja;