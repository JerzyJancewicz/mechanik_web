import React from "react";
import {Link} from "react-scroll"

function Footer(){
    return (
        <div class="footer-basic">
            <footer>
                <div id="footer-grid">
                    <ul class="list-inline">
                        <li><Link className="list-inline-item" to="poznaj-nas" smooth={true} duration={800} offset={-90}>O Nas</Link></li>
                        <li><Link className="list-inline-item" to="dlaczego-my" smooth={true} duration={800} offset={-105}>Dlaczego my?</Link></li>
                        <li><Link className="list-inline-item" to="nasza-oferta" smooth={true} duration={800} offset={-70}>Oferta</Link></li>
                    </ul>
                    <ul class="list-inline2">
                        <li><Link className="list-inline-item" to="opinie-klientow" smooth={true} duration={800} offset={-160}>Opinie</Link></li>
                        <li><Link className="list-inline-item" to="umow-wiz" smooth={true} duration={800} offset={-100}>Umów Wizytę</Link></li>
                        <li><Link className="list-inline-item" to="nasza-lok" smooth={true} duration={800}>Kontakt</Link></li>
                    </ul>
                </div>
                <p class="copyright">Elektromechanika Szarlej & Bochenek © 2023</p>
            </footer>
        </div>
    )
}

export default Footer;