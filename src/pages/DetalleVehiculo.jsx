import { useParams, useNavigate } from "react-router-dom";
import { useVehiculos } from "../context/VehiculosContext";
import Cabecera from "../components/Header";
import { getNombreMarcaLegible } from "../vehiculosData";

function DetalleVehiculo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { vehiculosInventario, marcarComoPosibleCompra } = useVehiculos();

  const vehiculo = vehiculosInventario.find((v) => v.id === parseInt(id));

  if (!vehiculo) {
    return (
      <div>
        <Cabecera title="Detalle de Vehículo" />
        <div className="container mt-4 mb-5 pb-5">
          <div className="alert alert-warning d-flex align-items-center" role="alert">
            <i className="bi bi-exclamation-triangle-fill fs-3 me-3"></i>
            <div>
              <h5 className="alert-heading">Vehículo no encontrado</h5>
              <p className="mb-0">El vehículo que buscas no está disponible en el inventario.</p>
            </div>
          </div>
          <button 
            onClick={() => navigate("/listarVehiculos")} 
            className="btn btn-primary"
          >
            <i className="bi bi-arrow-left me-2"></i>
            Volver al listado
          </button>
        </div>
      </div>
    );
  }

  const handleMarcarPosibleCompra = () => {
    marcarComoPosibleCompra(vehiculo.id);
    navigate("/listarVehiculos");
  };

  return (
    <div>
      <Cabecera title="Detalle del Vehículo" />
      <div className="container mt-4 mb-5 pb-5">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#/listarVehiculos" className="text-decoration-none">
                <i className="bi bi-card-list me-1"></i>
                Inventario
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {getNombreMarcaLegible(vehiculo.marca)} {vehiculo.modelo}
            </li>
          </ol>
        </nav>

        <div className="row">
          {/* Imagen del vehículo */}
          <div className="col-lg-6 mb-4">
            <div className="card shadow-sm h-100">
              <div 
                className="card-img-top bg-secondary d-flex align-items-center justify-content-center"
                style={{ height: "400px" }}
              >
                <div className="text-center text-white">
                  <i className="bi bi-car-front-fill" style={{ fontSize: "100px" }}></i>
                  <p className="mt-3 mb-0">Imagen no disponible</p>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="badge bg-primary fs-6">Año {vehiculo.año}</span>
                  <span className="badge bg-success fs-6">Disponible</span>
                </div>
              </div>
            </div>
          </div>

          {/* Información del vehículo */}
          <div className="col-lg-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-header bg-primary text-white">
                <h3 className="mb-0">
                  <i className="bi bi-car-front me-2"></i>
                  {getNombreMarcaLegible(vehiculo.marca)} {vehiculo.modelo}
                </h3>
              </div>
              <div className="card-body">
                {/* Precio destacado */}
                <div className="alert alert-success mb-4" role="alert">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <small className="text-muted">Precio</small>
                      <h2 className="mb-0 text-success">
                        ${parseInt(vehiculo.precio).toLocaleString('es-CL')}
                      </h2>
                    </div>
                    <i className="bi bi-currency-dollar fs-1"></i>
                  </div>
                </div>

                {/* Especificaciones */}
                <h5 className="mb-3">
                  <i className="bi bi-list-ul me-2"></i>
                  Especificaciones
                </h5>
                <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>
                      <i className="bi bi-tag-fill text-primary me-2"></i>
                      <strong>Marca:</strong>
                    </span>
                    <span>{getNombreMarcaLegible(vehiculo.marca)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>
                      <i className="bi bi-speedometer2 text-info me-2"></i>
                      <strong>Modelo:</strong>
                    </span>
                    <span>{vehiculo.modelo}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>
                      <i className="bi bi-calendar-event text-warning me-2"></i>
                      <strong>Año:</strong>
                    </span>
                    <span>{vehiculo.año}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>
                      <i className="bi bi-cash-coin text-success me-2"></i>
                      <strong>Precio:</strong>
                    </span>
                    <span className="text-success fw-bold">
                      ${parseInt(vehiculo.precio).toLocaleString('es-CL')}
                    </span>
                  </li>
                </ul>

                {/* Descripción */}
                <h5 className="mb-3">
                  <i className="bi bi-file-text me-2"></i>
                  Descripción
                </h5>
                <div className="alert alert-light" role="alert">
                  <p className="mb-0">{vehiculo.descripcion}</p>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="card-footer bg-transparent">
                <div className="d-grid gap-2">
                  <button
                    onClick={handleMarcarPosibleCompra}
                    className="btn btn-success btn-lg"
                  >
                    <i className="bi bi-cart-check-fill me-2"></i>
                    Marcar como Posible Compra
                  </button>
                  <button
                    onClick={() => navigate("/listarVehiculos")}
                    className="btn btn-outline-secondary"
                  >
                    <i className="bi bi-arrow-left me-2"></i>
                    Volver al listado
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-info-circle-fill text-primary me-2"></i>
                  ¿Por qué marcar como "Posible Compra"?
                </h5>
                <div className="row mt-3">
                  <div className="col-md-4 mb-3">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-bookmark-check-fill text-success fs-4 me-3"></i>
                      <div>
                        <h6 className="fw-bold">Guarda tus favoritos</h6>
                        <p className="small text-muted mb-0">
                          Marca los vehículos que más te interesan para revisarlos después
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-eye-fill text-info fs-4 me-3"></i>
                      <div>
                        <h6 className="fw-bold">Acceso rápido</h6>
                        <p className="small text-muted mb-0">
                          Visualiza todos tus vehículos marcados en un solo lugar
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-arrow-repeat text-warning fs-4 me-3"></i>
                      <div>
                        <h6 className="fw-bold">Fácil comparación</h6>
                        <p className="small text-muted mb-0">
                          Compara las opciones que más te gustan antes de decidir
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleVehiculo;