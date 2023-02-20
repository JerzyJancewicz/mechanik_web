import React from "react";
import Img from "../images/checklist-point-image.png"

function OpinieKlientow(){
    return (
        <section id="opinie-klientow">
            <div id="opinie-klientow-div">
                <h1 id="opinie-klientow-h1">Opinie Klientów</h1>
                <div id="opinie-klientow-grid">
                    <div className="opinie-klientow-div-grid-child">
                    <img className="opinie-klientow-img" src={Img} alt=""></img>
                        <p className="opinie-klientow-p">
                        Jestem bardzo zadowolona z ​obsługi. W tych czasach ciężko ​o tak dobrych, rzetelnych ​fachowców...problem z autem ​rozwiązany, 
                        wszystko ​dokładnie wytłumaczone. ​Polecam w 100% - klientka z czerwonej KIA
                        </p>
                    </div>
                    <div className="opinie-klientow-div-grid-child">
                        <img className="opinie-klientow-img" src={Img} alt=""></img>
                        <p className="opinie-klientow-p">
                        Naprawiali mi Państwo jakiś czas ​temu awarię w Peugeot 607, kilku ​elektryków z Białegostoku liczyło ​sobie dwukrotnie wyższe kwoty i ​nie rozwiązali problemu. 
                        U ​Państwa problem został ​rozwiązany bezproblemowo, cena ​usługi również bardzo atrakcyjna.
                        </p>
                    </div>
                    <div className="opinie-klientow-div-grid-child">
                        <img className="opinie-klientow-img" src={Img} alt=""></img>
                        <p className="opinie-klientow-p">
                        Profesjonalna obsługa , która ​lubi swoją pracę. Usługa ​wykonana błyskawicznie, 
                        a na ​koniec Pan mechanik przyniósł ​mi do wglądu stare części ​które wymagały wymiany. ​Polecam każdemu!
                        </p>
                    </div>  
                </div>                  
            </div>
        </section>
    )
}

export default OpinieKlientow;