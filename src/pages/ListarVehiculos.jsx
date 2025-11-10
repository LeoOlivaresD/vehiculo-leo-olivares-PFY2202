import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cabecera from "../components/Header";
import { useVehiculos } from "../context/VehiculosContext";
import { getNombreMarcaLegible } from "../vehiculosData";

function ListarVehiculos() {
  const navigate = useNavigate();
  const { vehiculosInventario } = useVehiculos();
  const [filtro, setFiltro] = useState({
    tipo: "todos",
    valor: "",
  });
  const [vehiculosFiltrados, setVehiculosFiltrados] = useState([]);
  const [vistaActual, setVistaActual] = useState("tabla"); // "tabla" o "tarjetas"

  useEffect(() => {
    filtrarVehiculos();
  }, [vehiculosInventario, filtro]);

  const filtrarVehiculos = () => {
    let resultado = [...vehiculosInventario];

    if (filtro.tipo !== "todos" && filtro.valor.trim() !== "") {
      resultado = resultado.filter((vehiculo) => {
        const valorVehiculo = String(vehiculo[filtro.tipo]).toLowerCase();
        const valorBusqueda = filtro.valor.toLowerCase();
        return valorVehiculo.includes(valorBusqueda);
      });
    }

    setVehiculosFiltrados(resultado);
  };

  const handleFiltroChange = (e) => {
    setFiltro({ ...filtro, [e.target.name]: e.target.value });
  };

  const limpiarFiltro = () => {
    setFiltro({ tipo: "todos", valor: "" });
  };

  const verDetalle = (id) => {
    navigate(`/detalleVehiculo/${id}`);
  };

  return (
    <div>
      <Cabecera title="Inventario de Vehículos" />
      <div className="container mt-4 mb-5 pb-5">
        {/* Header con estadísticas y controles */}
        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex align-items-center">
                <div className="flex-grow-1">
                  <h5 className="mb-1">
                    <i className="bi bi-car-front-fill text-primary me-2"></i>
                    Inventario General
                  </h5>
                  <p className="text-muted mb-0">
                    Explora nuestra colección completa
                  </p>
                </div>
                <div className="text-end">
                  <h2 className="mb-0 text-primary">{vehiculosInventario.length}</h2>
                  <small className="text-muted">Vehículos</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="text-muted">Vista:</span>
                  <div className="btn-group btn-group-sm" role="group">
                    <button
                      type="button"
                      className={`btn ${vistaActual === "tabla" ? "btn-primary" : "btn-outline-primary"}`}
                      onClick={() => setVistaActual("tabla")}
                    >
                      <i className="bi bi-table me-1"></i>
                      Tabla
                    </button>
                    <button
                      type="button"
                      className={`btn ${vistaActual === "tarjetas" ? "btn-primary" : "btn-outline-primary"}`}
                      onClick={() => setVistaActual("tarjetas")}
                    >
                      <i className="bi bi-grid-3x3-gap-fill me-1"></i>
                      Tarjetas
                    </button>
                  </div>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: `${(vehiculosFiltrados.length / vehiculosInventario.length) * 100}%` }}
                  ></div>
                </div>
                <small className="text-muted">
                  Mostrando {vehiculosFiltrados.length} de {vehiculosInventario.length}
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* Panel de filtros */}
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title mb-3">
              <i className="bi bi-funnel-fill text-primary me-2"></i>
              Filtros de Búsqueda
            </h5>
            <div className="row g-3">
              <div className="col-md-3">
                <label className="form-label fw-bold small">Categoría:</label>
                <select
                  name="tipo"
                  value={filtro.tipo}
                  onChange={handleFiltroChange}
                  className="form-select form-select-sm"
                >
                  <option value="todos">Todas las categorías</option>
                  <option value="marca">🏷️ Marca</option>
                  <option value="modelo">🚗 Modelo</option>
                  <option value="precio">💰 Precio</option>
                  <option value="año">📅 Año</option>
                </select>
              </div>
              <div className="col-md-7">
                <label className="form-label fw-bold small">Buscar:</label>
                <input
                  type="text"
                  name="valor"
                  value={filtro.valor}
                  onChange={handleFiltroChange}
                  placeholder="Ingrese el valor a buscar..."
                  className="form-control form-control-sm"
                  disabled={filtro.tipo === "todos"}
                />
              </div>
              <div className="col-md-2 d-flex align-items-end">
                <button
                  onClick={limpiarFiltro}
                  className="btn btn-outline-secondary btn-sm w-100"
                  disabled={filtro.tipo === "todos" && !filtro.valor}
                >
                  <i className="bi bi-arrow-clockwise me-1"></i>
                  Limpiar
                </button>
              </div>
            </div>
            {filtro.tipo !== "todos" && filtro.valor && (
              <div className="alert alert-info mt-3 mb-0 py-2" role="alert">
                <i className="bi bi-search me-2"></i>
                <small>
                  Resultados: <strong>{vehiculosFiltrados.length}</strong> vehículos encontrados
                </small>
              </div>
            )}
          </div>
        </div>

        {/* Vista de Tabla */}
        {vistaActual === "tabla" && (
          <div className="card shadow-sm">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-dark">
                  <tr>
                    <th><i className="bi bi-tag me-1"></i>Marca</th>
                    <th><i className="bi bi-speedometer2 me-1"></i>Modelo</th>
                    <th><i className="bi bi-cash-coin me-1"></i>Precio</th>
                    <th><i className="bi bi-calendar-event me-1"></i>Año</th>
                    <th><i className="bi bi-file-text me-1"></i>Descripción</th>
                    <th className="text-center"><i className="bi bi-gear me-1"></i>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {vehiculosFiltrados.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center py-5">
                        <i className="bi bi-inbox fs-1 text-muted d-block mb-3"></i>
                        <h5 className="text-muted">
                          {vehiculosInventario.length === 0
                            ? "No hay vehículos registrados"
                            : "No se encontraron vehículos con ese filtro"}
                        </h5>
                        <p className="text-muted small mb-3">
                          {vehiculosInventario.length === 0
                            ? "Comienza agregando vehículos al inventario"
                            : "Intenta con otros criterios de búsqueda"}
                        </p>
                        {vehiculosInventario.length === 0 && (
                          <button
                            onClick={() => navigate("/registroVehiculo")}
                            className="btn btn-primary"
                          >
                            <i className="bi bi-plus-circle me-2"></i>
                            Registrar Vehículo
                          </button>
                        )}
                      </td>
                    </tr>
                  ) : (
                    vehiculosFiltrados.map((v) => (
                      <tr
                        key={v.id}
                        style={{ cursor: "pointer" }}
                        onClick={() => verDetalle(v.id)}
                      >
                        <td className="fw-bold">{getNombreMarcaLegible(v.marca)}</td>
                        <td>{v.modelo}</td>
                        <td className="text-success fw-bold">
                          ${parseInt(v.precio).toLocaleString('es-CL')}
                        </td>
                        <td>
                          <span className="badge bg-secondary">{v.año}</span>
                        </td>
                        <td>
                          <small className="text-muted">
                            {v.descripcion.length > 50
                              ? v.descripcion.substring(0, 50) + "..."
                              : v.descripcion}
                          </small>
                        </td>
                        <td className="text-center">
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={(e) => {
                              e.stopPropagation();
                              verDetalle(v.id);
                            }}
                          >
                            <i className="bi bi-eye me-1"></i>
                            Ver
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Vista de Tarjetas */}
        {vistaActual === "tarjetas" && (
          <div className="row">
            {vehiculosFiltrados.length === 0 ? (
              <div className="col-12">
                <div className="card shadow-sm">
                  <div className="card-body text-center py-5">
                    <i className="bi bi-inbox fs-1 text-muted d-block mb-3"></i>
                    <h5 className="text-muted">
                      {vehiculosInventario.length === 0
                        ? "No hay vehículos registrados"
                        : "No se encontraron vehículos con ese filtro"}
                    </h5>
                    <p className="text-muted small mb-3">
                      {vehiculosInventario.length === 0
                        ? "Comienza agregando vehículos al inventario"
                        : "Intenta con otros criterios de búsqueda"}
                    </p>
                    {vehiculosInventario.length === 0 && (
                      <button
                        onClick={() => navigate("/registroVehiculo")}
                        className="btn btn-primary"
                      >
                        <i className="bi bi-plus-circle me-2"></i>
                        Registrar Vehículo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              vehiculosFiltrados.map((v) => (
                <div key={v.id} className="col-lg-4 col-md-6 mb-4">
                  <div
                    className="card h-100 shadow-sm card-hover"
                    style={{ cursor: "pointer" }}
                    onClick={() => verDetalle(v.id)}
                  >
                    {/* Imagen placeholder con gradiente */}
                    <div
                      className="d-flex align-items-center justify-content-center text-white position-relative"
                      style={{
                        height: "200px",
                        background: `linear-gradient(135deg, ${
                          ['#667eea', '#f093fb', '#4facfe', '#43e97b', '#fa709a'][v.id % 5]
                        } 0%, ${
                          ['#764ba2', '#f5576c', '#00f2fe', '#38f9d7', '#fee140'][v.id % 5]
                        } 100%)`
                      }}
                    >
                      <div className="text-center">
                        <i className="bi bi-car-front-fill" style={{ fontSize: "70px" }}></i>
                        <p className="mb-0 mt-2 fw-bold">{getNombreMarcaLegible(v.marca)}</p>
                      </div>
                      <span className="position-absolute top-0 end-0 m-2 badge bg-dark">
                        {v.año}
                      </span>
                    </div>

                    {/* Contenido */}
                    <div className="card-body">
                      <h5 className="card-title mb-3">
                        {getNombreMarcaLegible(v.marca)} {v.modelo}
                      </h5>

                      <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <small className="text-muted">
                            <i className="bi bi-calendar-event me-1"></i>
                            Año
                          </small>
                          <span className="badge bg-secondary">{v.año}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <small className="text-muted">
                            <i className="bi bi-cash-coin me-1"></i>
                            Precio
                          </small>
                          <span className="text-success fw-bold fs-5">
                            ${parseInt(v.precio).toLocaleString('es-CL')}
                          </span>
                        </div>
                      </div>

                      <hr />

                      <p className="card-text small text-muted" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        minHeight: '60px'
                      }}>
                        {v.descripcion}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="card-footer bg-transparent border-0 pt-0">
                      <button
                        className="btn btn-primary w-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          verDetalle(v.id);
                        }}
                      >
                        <i className="bi bi-eye me-2"></i>
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* CSS adicional */}
      <style>{`
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.2) !important;
        }
      `}</style>
    </div>
  );
}

export default ListarVehiculos;