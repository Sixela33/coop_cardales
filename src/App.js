import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './pages/home/Home'
import Equipo from './pages/equipo/Equipo'
import ControlTransito from './pages/ControlTransito';
import FTTH from './pages/FTTH';
import RxDiagnostics from './pages/RxDiagnostics';
import Estatuto from './pages/Estatuto';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Header/>

          <div className='rutas'>
            <Routes>
              <Route path="/team" element={<Equipo />} />
              <Route path="/transito" element={<ControlTransito />} />
              <Route path="/ftth" element={<FTTH />} />
              <Route path="/diagnosticosinteligentes" element={<RxDiagnostics />} />
              <Route path="/estatuto" element={<Estatuto />} />
              {/* When unknown route, go to home */}
              <Route path="*" element={<Home />} />
              

            </Routes>
          </div>
        
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
