import { useNavigate } from "react-router-dom";
import { useVehiculos } from "../context/VehiculosContext";
import Cabecera from "../components/Header";
import { getNombreMarcaLegible } from "../vehiculosData";

function PosiblesCompras() {
  const navigate = useNavigate();
  const { vehiculosPosibleCompra, desmarcarVehiculo } = useVehiculos();

  const handleDesmarcar = (id) => {
    if (window.confirm("¿Deseas quitar este vehículo de tus posibles compras?")) {
      desmarcarVehiculo(id);
    }
  };

  const calcularTotal = () => {
    return vehiculosPosibleCompra.reduce((total, v) => {
      return total + parseInt(v.precio);
    }, 0);
  };

  return (
    <div>
      <Cabecera title="Mis Posibles Compras" />
      <div className="container mt-4 mb-5 pb-5">
        {/* Header con estadísticas */}
        <div className="row mb-4">
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm border-primary">
              <div className="card-body text-center">
                <i className="bi bi-cart-check-fill text-primary fs-1 mb-2"></i>
                <h3 className="mb-0">{vehiculosPosibleCompra.length}</h3>
                <small className="text-muted">Vehículos Marcados</small>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm border-success">
              <div className="card-body text-center">
                <i className="bi bi-cash-coin text-success fs-1 mb-2"></i>
                <h5 className="mb-0">
                  ${calcularTotal().toLocaleString('es-CL')}
                </h5>
                <small className="text-muted">Valor Total</small>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm border-info">
              <div className="card-body text-center">
                <i className="bi bi-calculator text-info fs-1 mb-2"></i>
                <h5 className="mb-0">
                  ${vehiculosPosibleCompra.length > 0 
                    ? Math.round(calcularTotal() / vehiculosPosibleCompra.length).toLocaleString('es-CL')
                    : '0'}
                </h5>
                <small className="text-muted">Precio Promedio</small>
              </div>
            </div>
          </div>
        </div>

        {/* Botón volver */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>
            <i className="bi bi-star-fill text-warning me-2"></i>
            Vehículos de tu Interés
          </h4>
          <button
            onClick={() => navigate("/listarVehiculos")}
            className="btn btn-outline-primary"
          >
            <i className="bi bi-arrow-left me-2"></i>
            Volver al inventario
          </button>
        </div>

        {vehiculosPosibleCompra.length === 0 ? (
          <div className="card shadow-sm">
            <div className="card-body text-center py-5">
              <i className="bi bi-cart-x text-muted" style={{ fontSize: "100px" }}></i>
              <h3 className="mt-4 mb-3">No hay vehículos marcados</h3>
              <p className="text-muted mb-4">
                Explora nuestro inventario y marca los vehículos que te interesen para verlos aquí.
              </p>
              <button
                onClick={() => navigate("/listarVehiculos")}
                className="btn btn-primary btn-lg"
              >
                <i className="bi bi-search me-2"></i>
                Explorar Inventario
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Lista de vehículos */}
            <div className="row">
              {vehiculosPosibleCompra.map((vehiculo) => (
                <div key={vehiculo.id} className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100 shadow-sm hover-shadow">
                    {/* Badge de marcado */}
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className="badge bg-success">
                        <i className="bi bi-check-circle-fill me-1"></i>
                        Marcado
                      </span>
                    </div>

                    {/* Imagen placeholder */}
                    <div 
                      className="bg-gradient d-flex align-items-center justify-content-center text-white"
                      style={{ 
                        height: "200px",
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      }}
                    >
                      <div className="text-center">
                        <i className="bi bi-car-front-fill" style={{ fontSize: "60px" }}></i>
                        <p className="mb-0 mt-2">{getNombreMarcaLegible(vehiculo.marca)}</p>
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="card-title mb-0">
                          {getNombreMarcaLegible(vehiculo.marca)} {vehiculo.modelo}
                        </h5>
                        <span className="badge bg-secondary">{vehiculo.año}</span>
                      </div>

                      <hr />

                      <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <small className="text-muted">
                            <i className="bi bi-calendar-event me-1"></i>
                            Año
                          </small>
                          <span className="fw-bold">{vehiculo.año}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <small className="text-muted">
                            <i className="bi bi-cash-coin me-1"></i>
                            Precio
                          </small>
                          <span className="text-success fw-bold fs-5">
                            ${parseInt(vehiculo.precio).toLocaleString('es-CL')}
                          </span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <small className="text-muted d-block mb-1">
                          <i className="bi bi-file-text me-1"></i>
                          Descripción
                        </small>
                        <p className="small mb-0" style={{ 
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}>
                          {vehiculo.descripcion}
                        </p>
                      </div>
                    </div>

                    {/* Acciones */}
                    <div className="card-footer bg-transparent border-top-0">
                      <div className="d-grid gap-2">
                        <button
                          onClick={() => navigate(`/detalleVehiculo/${vehiculo.id}`)}
                          className="btn btn-outline-primary btn-sm"
                        >
                          <i className="bi bi-eye me-1"></i>
                          Ver Detalle
                        </button>
                        <button
                          onClick={() => handleDesmarcar(vehiculo.id)}
                          className="btn btn-warning btn-sm"
                        >
                          <i className="bi bi-x-circle me-1"></i>
                          Desmarcar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resumen final */}
            <div className="card shadow-sm mt-4">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h5 className="mb-2">
                      <i className="bi bi-info-circle-fill text-primary me-2"></i>
                      ¿Listo para el siguiente paso?
                    </h5>
                    <p className="text-muted mb-0">
                      Cuando estés listo, puedes contactarnos para obtener más información 
                      sobre estos vehículos o agendar una visita.
                    </p>
                  </div>
                  <div className="col-md-4 text-md-end mt-3 mt-md-0">
                    <button
                      onClick={() => navigate("/contacto")}
                      className="btn btn-success btn-lg"
                    >
                      <i className="bi bi-telephone-fill me-2"></i>
                      Contactar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* CSS adicional para hover effect */}
      <style>{`
        .hover-shadow {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-shadow:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15) !important;
        }
      `}</style>
    </div>
  );
}

export default PosiblesCompras;