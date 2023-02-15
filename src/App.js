import './index.css';
import Contact from "./Contact";
import NavBar from './NavBar';
import Onas from './sections/Onas';
import PoznajNas from './sections/PoznajNas';
import DlaczegoMy from './sections/DlaczegoMy';

function App() { 

  return (
    <div className="App">
      <NavBar/>
      <Onas/>
      <PoznajNas/>
      <DlaczegoMy/>
      <Contact/>
    </div>
  );
}

export default App;