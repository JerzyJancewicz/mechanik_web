import React from "react";
import Img from "../images/2.png";
import Logo from "../images/4.png";

function UmowWizyte(){
    return(
        <section id="umow-wiz">
            <div id="umow-wiz-div">
                <div id="umow-wiz-div1">
                    <img id="umow-wiz-back-img" src={Img} alt=""></img>
                </div>
                <div id="umow-wiz-div2">
                    <p id="umow-wiz-p">
                        W przypadku jakichkolwiek potrzeb związanych
                        z naprawą lub konserwacją samochodu zaufany ​mechanik służy pomocą.
                    </p>
                    <div id="umow-wiz-mail-div">
                        <a id="umow-wiz-mail-btn" href="mailto:jancewiczejrzy@gmail.com">Umów wizytę</a>
                    </div>
                </div>
                <div id="umow-wiz-logo-div">
                        <img id="umow-wiz-logo" src={Logo} alt=""></img>
                        <p>ELEKTROMECHANIKA ​MOTORYZACYJNA</p>
                </div>
            </div>
        </section>
    )
}

export default UmowWizyte;