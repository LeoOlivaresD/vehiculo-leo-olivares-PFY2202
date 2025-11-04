import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";
import RegistrarVehiculo from "./pages/RegistroVehiculo";
import ListaVehiculos from "./pages/ListarVehiculos";
import MenuInferior from "./components/MenuInferior";

function App() {
  const [vehiculos, setVehiculos] = useState([]);
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/registroVehiculo" element={<RegistrarVehiculo />} />
          <Route path="/listarVehiculos" element={<ListaVehiculos />} />
        </Routes>
        <MenuInferior />
      </div>
    </Router>
  );
}

export default App;
