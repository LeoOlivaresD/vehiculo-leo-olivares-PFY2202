import { Link } from "react-router-dom";
import { useVehiculos } from "../context/VehiculosContext";

function MenuInferior() {
  const { vehiculosPosibleCompra } = useVehiculos();

  return (
    <nav className="fixed-bottom bg-white border-top shadow-lg py-2">
      <div className="container d-flex justify-content-around align-items-center px-3">
        <Link
          to="/"
          className="text-decoration-none text-dark text-center small"
        >
          <i className="bi bi-house-door-fill d-block fs-5"></i>
          Inicio
        </Link>
        <Link
          to="/quienes-somos"
          className="text-decoration-none text-dark text-center small"
        >
          <i className="bi bi-people-fill d-block fs-5"></i>
          Nosotros
        </Link>
        <Link
          to="/contacto"
          className="text-decoration-none text-dark text-center small"
        >
          <i className="bi bi-envelope-fill d-block fs-5"></i>
          Contacto
        </Link>
        <Link
          to="/registroVehiculo"
          className="text-decoration-none text-dark text-center small"
        >
          <i className="bi bi-plus-circle-fill d-block fs-5"></i>
          Registrar
        </Link>
        <Link
          to="/listarVehiculos"
          className="text-decoration-none text-dark text-center small"
        >
          <i className="bi bi-card-list d-block fs-5"></i>
          Lista
        </Link>
        <Link
          to="/posiblesCompras"
          className="text-decoration-none text-dark text-center small position-relative"
        >
          <i className="bi bi-cart-check-fill d-block fs-5"></i>
          Compras
          {vehiculosPosibleCompra.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {vehiculosPosibleCompra.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default MenuInferior;
