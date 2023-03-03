import React, { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function Map({ center }) {
    const mapCenter = useMemo(() => center, [center]);
    return (
      <GoogleMap zoom={17} center={mapCenter} mapContainerClassName="nasza-lok-map2">
        <Marker position={{ lat: 53.14209, lng: 23.15669 }}/>
      </GoogleMap>
    );
  }

function NaszaLokalizacja(){

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCAOgh5r1X1kyAn-OQXV9s-1wOpoBPDi4U",
    });

    const [center, setCenter] = useState({ lat: 53.14209, lng: 23.15669 });

    if(!isLoaded){
        return <div id="nasza-lok-map"></div>;
    }

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
                <Map center={center} setCenter={setCenter}/>
            </div>
        </section>
    )
}

export default NaszaLokalizacja;

//"AIzaSyCAOgh5r1X1kyAn-OQXV9s-1wOpoBPDi4U"