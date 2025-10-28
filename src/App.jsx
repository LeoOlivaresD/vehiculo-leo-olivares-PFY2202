import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tiendas from './pages/Tiendas';
import Contacto from './pages/Contacto';
import MenuInferior from './components/MenuInferior';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tiendas" element={<Tiendas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <MenuInferior />
      </div>
    </Router>
  );
}

export default App;
