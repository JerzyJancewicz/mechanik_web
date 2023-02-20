import React from "react";
import Img1 from "../images/image00007.jpeg";
import Img2 from "../images/image.png";

function poznajNas(){
    return (
        <section id="poznaj-nas">
            <div id="poznaj-nas-div">
                <div id="poznaj-nas-div-p">
                    <h1 id="poznaj-nas-div-h1">Po​znaj Nas</h1>
                    <p>Szarlej & Bochenek to wielopokoleniowa firma rodzinna
                       z ponad 50-letnią tradycją. Nasza firma została założona
                       w​ 1971 roku przez Mieczysława Szarleja. Model prowadzenia​ interesów, wartości i postawy nestora firmy kontynuujemy ​od roku 2013 do dziś. Naszym celem jest zapewnienie ​Klientom najwyższego poziomu usługi
                       krótkim terminie​ realizacji i korzystnej cenie. Nasza firma stawia na​ najwyższą jakość, uczciwość, zaangażowanie, pasję, pr​ofesjonalizm i wiarygodność. Główny profil działalności fi​rmy to naprawy elektromechaniczne pojazdów sa​mochodowych, także aut zabytkowych
                       i pełna d​iagnostyka komputerowa.</p>
                </div>
                <div className="poznaj-imgs1">
                    <div className="poznaj-imgs">
                        <img src={Img1} id="poznaj-nas-img1" alt=""></img>
                    </div>
                    <div className="poznaj-imgs">
                        <img src={Img2} id="poznaj-nas-img2" alt=""></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default poznajNas;