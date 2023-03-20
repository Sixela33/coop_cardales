import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter,Routes,  Route } from "react-router-dom";
import Home from './pages/Home'
import Equipo from './pages/Equipo'
import ControlTransito from './pages/ControlTransito';
import FTTH from './pages/FTTH';
import RxDiagnostics from './pages/RxDiagnostics';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Header/>

          <div className='rutas'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Equipo />} />
              <Route path="/transito" element={<ControlTransito />} />
              <Route path="/ftth" element={<FTTH />} />
              <Route path="/diagnosticosinteligentes" element={<RxDiagnostics />} />
            </Routes>
          </div>
        
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
