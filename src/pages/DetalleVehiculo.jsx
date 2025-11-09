import { useParams, useNavigate } from "react-router-dom";
import { useVehiculos } from "../context/VehiculosContext";
import Cabecera from "../components/Header";

function DetalleVehiculo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { vehiculosInventario, marcarComoPosibleCompra } = useVehiculos();

  // Buscar el vehículo por ID
  const vehiculo = vehiculosInventario.find((v) => v.id === parseInt(id));

  // Si no existe el vehículo, mostrar mensaje
  if (!vehiculo) {
    return (
      <div>
        <Cabecera title="Detalle de Vehículo" />
        <div className="container mt-4">
          <div className="alert alert-warning">Vehículo no encontrado</div>
          <button
            onClick={() => navigate("/listarVehiculos")}
            className="btn btn-secondary"
          >
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
      <Cabecera title="Detalle de Vehículo" />
      <div className="container mt-4">
        <div className="card">
          <div className="card-header bg-primary text-white">
            <h3>
              {vehiculo.marca} {vehiculo.modelo}
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h5>Información General</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Marca:</strong> {vehiculo.marca}
                  </li>
                  <li className="list-group-item">
                    <strong>Modelo:</strong> {vehiculo.modelo}
                  </li>
                  <li className="list-group-item">
                    <strong>Año:</strong> {vehiculo.año}
                  </li>
                  <li className="list-group-item">
                    <strong>Precio:</strong> ${vehiculo.precio}
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5>Descripción</h5>
                <p className="card-text">{vehiculo.descripcion}</p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="d-flex gap-2">
              <button
                onClick={handleMarcarPosibleCompra}
                className="btn btn-success"
              >
                ✓ Marcar como Posible Compra
              </button>
              <button
                onClick={() => navigate("/listarVehiculos")}
                className="btn btn-secondary"
              >
                Volver al listado
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleVehiculo;
