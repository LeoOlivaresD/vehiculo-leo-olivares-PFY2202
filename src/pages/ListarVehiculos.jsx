import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cabecera from "../components/Header";
import { useVehiculos } from "../context/VehiculosContext";

function ListarVehiculos() {
  const navigate = useNavigate();
  const { vehiculosInventario } = useVehiculos();
  const [filtro, setFiltro] = useState({
    tipo: "todos",
    valor: "",
  });
  const [vehiculosFiltrados, setVehiculosFiltrados] = useState([]);

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
      <Cabecera title="Lista de Vehículos" />
      <div className="container mt-4 mb-5 pb-5">
        {/* Badge con total de vehículos */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5>Inventario General</h5>
          <span className="badge bg-primary fs-6">
            Total: {vehiculosInventario.length} vehículos
          </span>
        </div>

        {/* Panel de filtros */}
        <div className="card mb-3 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">
              <i className="bi bi-funnel-fill me-2"></i>
              Filtrar Vehículos
            </h5>
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label fw-bold">Filtrar por:</label>
                <select
                  name="tipo"
                  value={filtro.tipo}
                  onChange={handleFiltroChange}
                  className="form-select"
                >
                  <option value="todos">Todos los vehículos</option>
                  <option value="marca">Marca</option>
                  <option value="modelo">Modelo</option>
                  <option value="precio">Precio</option>
                  <option value="año">Año</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Buscar:</label>
                <input
                  type="text"
                  name="valor"
                  value={filtro.valor}
                  onChange={handleFiltroChange}
                  placeholder="Ingrese el valor a buscar..."
                  className="form-control"
                  disabled={filtro.tipo === "todos"}
                />
              </div>
              <div className="col-md-2 d-flex align-items-end">
                <button
                  onClick={limpiarFiltro}
                  className="btn btn-outline-secondary w-100"
                >
                  <i className="bi bi-arrow-clockwise me-1"></i>
                  Limpiar
                </button>
              </div>
            </div>
            {filtro.tipo !== "todos" && filtro.valor && (
              <div className="mt-2">
                <small className="text-muted">
                  Mostrando {vehiculosFiltrados.length} de {vehiculosInventario.length} vehículos
                </small>
              </div>
            )}
          </div>
        </div>

        {/* Tabla de vehículos */}
        <div className="card shadow-sm">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-dark">
                  <tr>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Precio</th>
                    <th>Año</th>
                    <th>Descripción</th>
                    <th className="text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {vehiculosFiltrados.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center py-4">
                        <i className="bi bi-inbox fs-1 text-muted d-block mb-2"></i>
                        <p className="text-muted mb-0">
                          {vehiculosInventario.length === 0
                            ? "No hay vehículos registrados en el inventario"
                            : "No se encontraron vehículos con ese filtro"}
                        </p>
                      </td>
                    </tr>
                  ) : (
                    vehiculosFiltrados.map((v) => (
                      <tr 
                        key={v.id}
                        style={{ cursor: "pointer" }}
                        onClick={() => verDetalle(v.id)}
                        className="align-middle"
                      >
                        <td className="fw-bold">{v.marca}</td>
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
                            Ver Detalle
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListarVehiculos;