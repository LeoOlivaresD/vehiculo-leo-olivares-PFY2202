import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";
import RegistrarVehiculo from "./pages/RegistroVehiculo";
import ListarVehiculos from "./pages/ListarVehiculos";
import MenuInferior from "./components/MenuInferior";

function AppRoutes() {
  const [vehiculos, setVehiculos] = useState([]);
  return (
    <Router>
      <div className="w-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route
            path="/registroVehiculo"
            element={
              <RegistrarVehiculo
                vehiculos={vehiculos}
                setVehiculos={setVehiculos}
              />
            }
          />
          <Route
            path="/listarVehiculos"
            element={<ListarVehiculos vehiculos={vehiculos} />}
          />
        </Routes>
        <MenuInferior />
      </div>
    </Router>
  );
}
export default AppRoutes;
