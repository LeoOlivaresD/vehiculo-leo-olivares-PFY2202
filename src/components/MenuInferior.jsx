import { Link } from "react-router-dom";

function MenuInferior() {
  return (
    <nav className="fixed-bottom bg-white border-top shadow-lg py-2">
      <div className="container d-flex justify-content-between align-items-center px-3">
        <Link to="/" className="text-decoration-none text-dark text-center small">
          <i className="bi bi-house-door-fill d-block fs-5"></i>
          Inicio
        </Link>
        <Link to="/quienes-somos" className="text-decoration-none text-dark text-center small">
          <i className="bi bi-people-fill d-block fs-5"></i>
          Nosotros
        </Link>
        <Link to="/contacto" className="text-decoration-none text-dark text-center small">
          <i className="bi bi-envelope-fill d-block fs-5"></i>
          Contacto
        </Link>
        <Link to="/registroVehiculo" className="text-decoration-none text-dark text-center small">
          <i className="bi bi-plus-circle-fill d-block fs-5"></i>
          Registrar
        </Link>
        <Link to="/listarVehiculos" className="text-decoration-none text-dark text-center small">
          <i className="bi bi-card-list d-block fs-5"></i>
          Lista
        </Link>
      </div>
    </nav>
  );
}

export default MenuInferior;
