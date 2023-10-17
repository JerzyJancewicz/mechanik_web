import './index.css';
import Contact from "./Contact";
import NavBar from './NavBar';
import Onas from './sections/Onas';
import PoznajNas from './sections/PoznajNas';
import DlaczegoMy from './sections/DlaczegoMy';
import NaszaOferta from './sections/NaszaOferta';
import OpinieKlientow from './sections/OpinieKlientow';
import UmowWizyte from './sections/UmowWizyte';
import NaszaLokalizacja from './sections/NaszaLokalizacja';
import Certyfikat from './sections/Certyfikat';
import Footer from './sections/Footer';

function App() { 

  return (
    <div className="App">
      <NavBar/>
      <Onas/>
      <PoznajNas/>
      <DlaczegoMy/>
      <NaszaOferta/>
      <OpinieKlientow/>
      <Certyfikat/>
      <UmowWizyte/>
      <NaszaLokalizacja/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;