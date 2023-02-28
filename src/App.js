import './index.css';
import Contact from "./Contact";
import NavBar from './NavBar';
import Onas from './sections/Onas';
import PoznajNas from './sections/PoznajNas';
import DlaczegoMy from './sections/DlaczegoMy';
import NaszaOferta from './sections/NaszaOferta';
import OpinieKlientow from './sections/OpinieKlientow';
import UmowWizyte from './sections/UmowWizyte';

function App() { 

  return (
    <div className="App">
      <NavBar/>
      <Onas id="o-nas"/>
      <PoznajNas id="poznaj-nas"/>
      <DlaczegoMy id="dlaczego-my"/>
      <NaszaOferta id="nasza-oferta"/>
      <OpinieKlientow id="opinie-klientow"/>
      <UmowWizyte id="umow-wiz"/>
      <Contact/>
      <div></div>

    </div>
  );
}

export default App;