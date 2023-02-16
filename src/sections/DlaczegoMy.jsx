import React from "react";
import Img from "../images/dlaczego-my-tick.png";

function DlaczegoMy(){
    return (
        <section id="dlaczego-my">
            <div id="dlaczego-my-div">
                <div id="dlaczego-my-h1-div"><h1 id="dlaczego-my-h1">Dlaczego my</h1></div>
                <div className="dlaczego-my-div2">
                    <img className="dlaczego-my-img" src={Img} alt=""></img>
                    <h2 className="dlaczego-my-h2">NA​JWYŻSZA JAKOŚĆ</h2>
                    <p className="dlaczego-my-p">Do serwisowania Twoich ​pojazdów używamy wyłącznie ​wysokiej jakości materiałów ​eksploatacyjnych. Lata ​doświadczenia sprawiają, że ​Nasze usługi są najwyższej ​jakości</p>
                </div>
                <div className="dlaczego-my-div2">
                    <img className="dlaczego-my-img" src={Img} alt=""></img>
                    <h2 className="dlaczego-my-h2">EKSPERCI ​ELEKTROMECH​ANIKI</h2>
                    <p className="dlaczego-my-p">Wszyscy członkowie naszego ​zespołu posiadają wysokie ​kwalifikacje. Są wyszkoleni i
                        wyposażeni w niezbędny sprzęt,​ dzięki któremu możemy uzyskać​ znakomity efekt
                    </p>
                </div>
                <div className="dlaczego-my-div2">
                    <img className="dlaczego-my-img" src={Img} alt=""></img>
                    <h2 className="dlaczego-my-h2">INDYWIDUALNE ​PODEJŚCIE</h2>
                    <p className="dlaczego-my-p">Naszą najsilniejszą stroną jest ​elastyczność w działaniu
                        i indywidualna analiza potrzeb ​klienta. Problemy naszych ​klientów są naszym wyzwaniem,
                        a ​droga i rozwiązanie to kwestia ​cierpliwości, wytrwałości i wiedzy
                    </p>
                </div>
            </div>
        </section>
    )
}

export default DlaczegoMy;